// STATE
// ──────────────────────────────────────────────────────────────────────────
let state = {
  topic: 'Arrays',
  qIdx: 0,
  lang: 'python',
  attempts: 0,
  apiKey: '',
  runResult: null,   // 'correct' | 'incorrect' | null
  complexity: null,
  hints: null,
  errors: null,
  solution: null,
  activeTab: 'output',
  langMismatch: null,
  diffFilter: 'all'
};

const MAX_ATTEMPTS = 5;
const EXT = {python:'py', javascript:'js', java:'java', c:'c', cpp:'cpp'};
const LANG_LABEL = {python:'🐍 Python', javascript:'🟨 JS', java:'☕ Java', c:'⚙️ C', cpp:'⚙️ C++'};
const LANG_KW = {
  c:['#include','printf(','scanf(','int main()','void main()'],
  cpp:['#include','cout <<','cin >>','std::','vector<','using namespace'],
  java:['public class','System.out','import java','public static void main'],
  javascript:['console.log','function(','var ','let ','const ','=> '],
  python:['def ','print(','import ','elif ','True','False','None']
};

// ──────────────────────────────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────────────────────────────
function init() {
  const topicSel = document.getElementById('topic-select');
  Object.keys(DSA).forEach(t => {
    const o = document.createElement('option'); o.value = t; o.textContent = t;
    topicSel.appendChild(o);
  });
  renderQList();
  loadQuestion();
  updateLineNumbers();
  updateProgress();
}

// ──────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────────────────────────────────────
function onTopicChange() {
  state.topic = document.getElementById('topic-select').value;
  state.qIdx = 0;
  resetAttempts();
  renderQList();
  loadQuestion();
}

function onLangChange() {
  state.lang = document.getElementById('lang-select').value;
  // Clear editor and disable run-btn — re-enables only when user types
  const editor = document.getElementById('code-editor');
  editor.value = '';
  document.getElementById('run-btn').disabled = true;
  resetAttempts();
  loadQuestion();
}

function selectQ(idx) {
  state.qIdx = idx;
  document.getElementById('run-btn').disabled = true;
  resetAttempts();
  renderQList();
  loadQuestion();
}

function resetAttempts() {
  state.attempts = 0;
  state.runResult = null;
  state.complexity = null;
  state.hints = null;
  state.errors = null;
  state.solution = null;
  state.langMismatch = null;
  updateUI();
  renderRightPanel();
}

function getSolvedKey(topic) { return `codebuddy_solved_${topic || state.topic}`; }
function getSolvedSet(topic) {
  try { return new Set(JSON.parse(localStorage.getItem(getSolvedKey(topic)) || '[]')); } catch { return new Set(); }
}
function markSolved(idx) {
  const s = getSolvedSet(); s.add(idx);
  try { localStorage.setItem(getSolvedKey(), JSON.stringify([...s])); } catch {}
  updateProgress();
}
function updateProgress() {
  // Per-topic section progress
  const qs = DSA[state.topic];
  const total = qs.length;
  const solved = getSolvedSet().size;
  const pct = total ? Math.round((solved / total) * 100) : 0;
  const el = document.getElementById('progress-count');
  const fill = document.getElementById('progress-fill');
  if (el) el.textContent = `${solved} / ${total}`;
  if (fill) fill.style.width = pct + '%';
  // Overall progress across ALL topics
  let totalAll = 0, solvedAll = 0;
  Object.keys(DSA).forEach(t => {
    totalAll += DSA[t].length;
    solvedAll += getSolvedSet(t).size;
  });
  const pctAll = totalAll ? Math.round((solvedAll / totalAll) * 100) : 0;
  const ol = document.getElementById('overall-label');
  const of2 = document.getElementById('overall-fill');
  if (ol) ol.textContent = `${solvedAll} / ${totalAll} solved`;
  if (of2) of2.style.width = pctAll + '%';
}
function clearProgress() {
  try { localStorage.removeItem(getSolvedKey()); } catch {}
  updateProgress();
  renderQList();
}

function setDiffFilter(f) {
  state.diffFilter = f;
  // Update button active classes
  ['all','easy','medium','hard'].forEach(d => {
    const btn = document.getElementById(`filter-${d}`);
    if (!btn) return;
    btn.className = 'diff-filter-btn' + (d === f ? ` active-${d}` : '');
  });
  renderQList();
}

function renderQList() {
  const qs = DSA[state.topic];
  const solved = getSolvedSet();
  const list = document.getElementById('q-list');
  list.innerHTML = '';

  const ORDER = { easy: 0, medium: 1, hard: 2 };
  let sorted = qs
    .map((q, i) => ({ q, origIdx: i }))
    .sort((a, b) => ORDER[a.q.difficulty.toLowerCase()] - ORDER[b.q.difficulty.toLowerCase()]);

  // Apply difficulty filter
  if (state.diffFilter !== 'all') {
    sorted = sorted.filter(({ q }) => q.difficulty.toLowerCase() === state.diffFilter);
  }

  if (sorted.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'text-align:center;padding:20px 10px;font-family:var(--mono);font-size:11px;color:var(--txt3);';
    empty.textContent = 'No questions match this filter.';
    list.appendChild(empty);
    updateProgress();
    return;
  }

  let lastDiff = null;
  sorted.forEach(({ q, origIdx }) => {
    const d = q.difficulty.toLowerCase();
    if (state.diffFilter === 'all' && d !== lastDiff) {
      const lbl = document.createElement('div');
      lbl.className = 'diff-section-label';
      lbl.textContent = q.difficulty;
      list.appendChild(lbl);
      lastDiff = d;
    }
    const isSolved = solved.has(origIdx);
    const item = document.createElement('div');
    item.className = 'q-item' + (origIdx === state.qIdx ? ' active' : '');
    item.innerHTML = `<div class="diff-dot ${d}"></div><div class="q-item-name">${q.question}</div>${isSolved ? '<span style="color:var(--green);font-size:11px;flex-shrink:0;">✓</span>' : ''}`;
    item.onclick = () => selectQ(origIdx);
    list.appendChild(item);
  });

  updateProgress();
}

function loadQuestion() {
  const q = currentQ();
  const lang = state.lang;
  // Problem card
  document.getElementById('prob-title').textContent = q.question;
  document.getElementById('prob-input').textContent = q.sample_input;
  document.getElementById('prob-output').textContent = q.expected_output;
  const d = q.difficulty.toLowerCase();
  document.getElementById('prob-badge').className = `badge ${d}`;
  document.getElementById('prob-badge').textContent = q.difficulty;
  document.getElementById('diff-badge').className = `badge ${d}`;
  document.getElementById('diff-badge').textContent = q.difficulty;
  document.getElementById('info-topic').textContent = state.topic;
  // Chrome
  const ext = EXT[lang] || 'txt';
  document.getElementById('chrome-file').textContent = `solution.${ext}`;
  document.getElementById('chrome-lang').textContent = LANG_LABEL[lang];
  // Editor — build full prefill with signature + body placeholder + return stub
  const sig = q.function_signature[lang] || q.function_signature.python || '# Write your code here';
  document.getElementById('code-editor').value = buildPrefill(sig, lang);
  updateLineNumbers();
  updateUI();
}

function buildPrefill(sig, lang) {
  const indent = '    ';
  const comment = {
    python: '# ✏️ Write your logic here',
    javascript: '// ✏️ Write your logic here',
    java: '// ✏️ Write your logic here',
    c: '// ✏️ Write your logic here',
    cpp: '// ✏️ Write your logic here'
  }[lang] || '// ✏️ Write your logic here';

  const returnStub = {
    python: 'return None  # replace with your answer',
    javascript: 'return null;  // replace with your answer',
    java: 'return null;  // replace with your answer',
    c: 'return 0;  // replace with your answer',
    cpp: 'return {};  // replace with your answer'
  }[lang] || 'return null;';

  const sigTrimmed = sig.trimEnd();

  // Languages that use braces
  if (['javascript','java','c','cpp'].includes(lang)) {
    const base = sigTrimmed.endsWith('{') ? sigTrimmed : sigTrimmed + ' {';
    return `${base}\n${indent}${comment}\n${indent}${returnStub}\n}`;
  }
  // Python — sig ends with ':'
  const base = sigTrimmed.endsWith(':') ? sigTrimmed : sigTrimmed + ':';
  return `${base}\n${indent}${comment}\n${indent}${returnStub}\n`;
}

function currentQ() { return DSA[state.topic][state.qIdx]; }

// ──────────────────────────────────────────────────────────────────────────
// EDITOR
// ──────────────────────────────────────────────────────────────────────────
function updateLineNumbers() {
  const ta = document.getElementById('code-editor');
  const lines = ta.value.split('\n');
  const ln = document.getElementById('line-nums');
  ln.innerHTML = lines.map((_,i) => `<span>${i+1}</span>`).join('');
}

function onEditorInput() {
  const code = document.getElementById('code-editor').value.trim();
  document.getElementById('run-btn').disabled = !code;
}

function syncScroll() {
  const ta = document.getElementById('code-editor');
  document.getElementById('line-nums').scrollTop = ta.scrollTop;
}

function handleTab(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const ta = e.target;
    const s = ta.selectionStart, end = ta.selectionEnd;
    ta.value = ta.value.substring(0, s) + '    ' + ta.value.substring(end);
    ta.selectionStart = ta.selectionEnd = s + 4;
    updateLineNumbers();
  }
}

// ──────────────────────────────────────────────────────────────────────────
// API KEY
// ──────────────────────────────────────────────────────────────────────────
function saveApiKey() {
  const v = document.getElementById('api-key-input').value.trim();
  if (!v) return;
  state.apiKey = v;
  document.getElementById('api-area').innerHTML = `
    <div class="api-saved" onclick="clearApiKey()">✅ API Key saved &nbsp;·&nbsp; click to change</div>`;
}
function clearApiKey() {
  state.apiKey = '';
  document.getElementById('api-area').innerHTML = `
    <input class="api-input" type="password" id="api-key-input" placeholder="DeepSeek API key (sk-...)">
    <button class="btn btn-ghost" style="padding:6px 14px;font-size:12px;" onclick="saveApiKey()">Save</button>`;
}

// ──────────────────────────────────────────────────────────────────────────
// AI CALLS
// ──────────────────────────────────────────────────────────────────────────
async function callDeepSeek(prompt, maxTokens = 600) {
  if (!state.apiKey) return '❗ Please save your DeepSeek API key first.';
  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${state.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'deepseek-coder',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens
      })
    });
    if (!res.ok) { const t = await res.text(); return `❌ API Error ${res.status}: ${t.slice(0,200)}`; }
    const data = await res.json();
    return data.choices[0].message.content.trim();
  } catch(e) {
    return `❌ ${e.message}`;
  }
}

// ──────────────────────────────────────────────────────────────────────────
// PROMPTS
// ──────────────────────────────────────────────────────────────────────────
function promptValidate(q, lang, code, inp, exp) {
  return `You are an expert ${lang} engineer and strict DSA judge. Your job is to determine if the code below correctly solves the given problem.

PROBLEM: ${q}
LANGUAGE: ${lang}
SAMPLE INPUT: ${inp}
EXPECTED OUTPUT: ${exp}

CODE:
\`\`\`${lang}
${code}
\`\`\`

VALIDATION PROCESS — follow all steps:

STEP 1 — SYNTAX CHECK:
Read the code carefully for any syntax errors specific to ${lang}:
- Missing brackets, braces, parentheses, semicolons, colons
- Incorrect indentation (Python), unclosed strings, malformed expressions
- Invalid keywords or constructs for ${lang}
If any syntax error found → reply: incorrect

STEP 2 — COMPLETENESS CHECK:
Is the code a real, working attempt? Reject if:
- Function body has only placeholder: pass / return null / return 0 / TODO / empty body / only comments
- Code is clearly unfinished or skeleton-only
If incomplete → reply: incorrect

STEP 3 — SEMANTIC / LOGIC TRACE:
Mentally execute the code using the sample input: ${inp}
Consider ALL language-specific behaviors:
- Python: list/dict/set operations, slicing, built-ins, scope rules
- JavaScript: type coercion, array methods, closures, prototype methods
- Java: generics, Collections, autoboxing, integer overflow, StringBuilder
- C: pointer arithmetic, array passing, manual memory, integer division
- C++: STL containers (vector, map, set, priority_queue), iterators, pass by reference, std::sort
Trace every loop, condition, recursive call, and return statement.
Does the final output/return value match: ${exp} ?
If logic is wrong → reply: incorrect

STEP 4 — EDGE CASE & RUNTIME CHECK:
Would this code crash or produce wrong output on the given input due to:
- Null/undefined/nullptr dereference
- Index out of bounds
- Division by zero
- Infinite loop on this specific input
- Stack overflow
If yes → reply: incorrect

STEP 5 — APPROACH FLEXIBILITY:
Accept ANY correct algorithm regardless of time/space complexity.
Brute force, O(n²), nested loops — all acceptable if correct.
Standard imports, #include, using namespace std, import java.util.* — all fine, ignore them.
Focus only on correctness for the given sample input/output.

STEP 6 — VERDICT:
After completing all steps above, you may show your reasoning.
Your FINAL LINE must be ONLY one single word — nothing else, no punctuation, no explanation:
correct
or
incorrect`;
}
function promptComplexity(q, lang, code) {
  return `Analyze this ${lang} solution's complexity.\n\nProblem: ${q}\n\nCode:\n${code}\n\nReply ONLY in this EXACT JSON format:\n{"time": "O(...)", "time_reason": "one line", "space": "O(...)", "space_reason": "one line"}`;
}
function promptErrors(q, lang, code) {
  return `Analyze the following ${lang} code for the problem below.\n\nProblem: ${q}\n\nCode:\n${code}\n\nProvide:\n1. SYNTAX ERRORS: List each with line number. If none, write 'None'.\n2. LOGICAL ERRORS: List each with what's wrong. If none, write 'None'.\n3. OVERALL: Brief summary.\n\nBe specific and beginner-friendly. Keep under 2 sentences each.`;
}
function promptHints(q, lang) {
  return `Generate 6 progressive hints for this ${lang} problem.\n\nProblem: ${q}\n\nRules:\n- Each hint progressively more specific (hint 1 = vague, hint 6 = near-solution)\n- Under 25 words each\n- NO solution code\n- Number them 1 to 6\n\nReturn ONLY the 6 numbered hints, one per line.`;
}
function promptSolution(q, lang, sig) {
  return `You are an expert ${lang} programmer and DSA teacher. Provide the complete solution for the problem below.\n\nProblem: ${q}\nLanguage: ${lang}\nFunction signature to use:\n${sig}\n\nSTRICT FORMAT — reply in exactly this structure, nothing else:\n\nCODE:\n\`\`\`\n<complete working ${lang} solution using the exact function signature above>\n\`\`\`\n\nEXPLANATION:\n<clear step-by-step explanation of the approach, key logic, and why it works. Use plain text paragraphs. No bullet points. 4-6 sentences.>`;
}

// ──────────────────────────────────────────────────────────────────────────
// LANGUAGE MISMATCH
// ──────────────────────────────────────────────────────────────────────────
function detectLang(code) {
  const lower = code.toLowerCase();
  const scores = {};
  for (const [lang, kws] of Object.entries(LANG_KW)) {
    scores[lang] = kws.filter(kw => lower.includes(kw.toLowerCase())).length;
  }
  const best = Object.entries(scores).sort((a,b) => b[1]-a[1])[0];
  return best && best[1] > 0 ? best[0] : null;
}
function checkMismatch(code, sel) {
  const det = detectLang(code);
  const names = {python:'Python', javascript:'JavaScript', java:'Java', c:'C', cpp:'C++'};
  if (det && det !== sel) return `Your code looks like <strong>${names[det]}</strong> but selected language is <strong>${names[sel]}</strong>. Please switch or rewrite.`;
  return null;
}

// ──────────────────────────────────────────────────────────────────────────
// ACTIONS
// ──────────────────────────────────────────────────────────────────────────
async function runValidate() {
  const code = document.getElementById('code-editor').value.trim();
  if (!code) return;
  const q = currentQ();
  // mismatch check
  const mis = checkMismatch(code, state.lang);
  if (mis) {
    state.langMismatch = mis;
    state.runResult = null;
    switchTab('output');
    renderRightPanel();
    return;
  }
  state.langMismatch = null;
  switchTab('output');
  showLoading('🤖 Validating your code…');
  document.getElementById('run-btn').disabled = true;

  const verdict = await callDeepSeek(promptValidate(q.question, state.lang, code, q.sample_input, q.expected_output), 1000);
  document.getElementById('run-btn').disabled = false;

  // Parse only the last non-empty line to avoid false negatives from reasoning text
  const lastLine = verdict.trim().split('\n').map(l => l.trim()).filter(Boolean).pop() || '';
  if (lastLine.toLowerCase() === 'correct') {
    state.attempts = 0;
    state.runResult = 'correct';
    markSolved(state.qIdx);
    showLoading('📊 Analyzing complexity…');
    const cx = await callDeepSeek(promptComplexity(q.question, state.lang, code), 300);
    state.complexity = cx;
  } else {
    state.attempts = Math.min(state.attempts + 1, MAX_ATTEMPTS);
    state.runResult = 'incorrect';
    state.complexity = null;
  }
  updateUI();
  renderRightPanel();
}

async function showHints() {
  if (hintDisabled()) return;
  switchTab('hints');
  showLoading('💡 Generating hints…');
  const q = currentQ();
  const raw = await callDeepSeek(promptHints(q.question, state.lang), 500);
  state.hints = raw;
  renderRightPanel();
}

async function showErrors() {
  if (errDisabled()) return;
  const code = document.getElementById('code-editor').value.trim();
  if (!code) return;
  switchTab('errors');
  showLoading('🔍 Analyzing errors…');
  const q = currentQ();
  const raw = await callDeepSeek(promptErrors(q.question, state.lang, code), 700);
  state.errors = raw;
  renderRightPanel();
}

function hintDisabled() { return state.runResult === 'correct' || state.attempts < 2; }
function errDisabled()  { return state.runResult === 'correct'; }
function solDisabled()  { return state.attempts < 4 && state.runResult !== 'correct'; }

async function showSolution() {
  if (solDisabled()) return;
  switchTab('solution');
  showLoading('🔓 Generating solution & explanation…');
  const q = currentQ();
  const sig = q.function_signature[state.lang] || q.function_signature.python;
  const raw = await callDeepSeek(promptSolution(q.question, state.lang, sig), 1200);
  state.solution = raw;
  renderRightPanel();
}

// ──────────────────────────────────────────────────────────────────────────
// UI UPDATES
// ──────────────────────────────────────────────────────────────────────────
function updateUI() {
  // Attempt dots
  const dotsEl = document.getElementById('attempt-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const d = document.createElement('div');
    d.className = 'adot' + (i < state.attempts ? ' used' : '');
    dotsEl.appendChild(d);
  }
  document.getElementById('attempt-label').textContent = `${state.attempts}/${MAX_ATTEMPTS} attempts`;

  // Buttons
  const hBtn = document.getElementById('hint-btn');
  const isHintLocked = state.attempts < 2 && state.runResult !== 'correct';
  hBtn.disabled = hintDisabled();
  hBtn.innerHTML = `💡 Hints${isHintLocked ? ' 🔒' : ''}${state.runResult === 'correct' ? ' ✅' : ''}`;

  const eBtn = document.getElementById('err-btn');
  eBtn.disabled = errDisabled();
  eBtn.innerHTML = `🔍 Errors${state.runResult === 'correct' ? ' ✅' : ''}`;

  const sBtn = document.getElementById('sol-btn');
  const isSolLocked = solDisabled();
  sBtn.disabled = isSolLocked;
  sBtn.innerHTML = isSolLocked
    ? `🔒 Solution <span style="font-size:10px;opacity:.6;">(${Math.max(0, 4 - state.attempts)} more)</span>`
    : `🔓 Solution`;
}

function switchTab(tab) {
  state.activeTab = tab;
  ['output','hints','errors','solution'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.toggle('active', t === tab);
  });
}

function showLoading(msg) {
  document.getElementById('right-body').innerHTML = `
    <div class="loading">
      <div class="ldots"><span></span><span></span><span></span></div>
      ${msg}
    </div>`;
}

function renderRightPanel() {
  const body = document.getElementById('right-body');
  const tab = state.activeTab;

  if (tab === 'output') {
    let html = '';
    if (state.langMismatch) {
      html += `<div class="lang-warn"><div class="lang-warn-icon">⚠️</div><div>${state.langMismatch}</div></div>`;
    }
    if (state.runResult === 'correct') {
      html += `<div class="result success">
        <div class="result-title">✅ Correct Solution!</div>
        <div class="result-body">Your code produces the expected output. Great work!</div>
      </div>`;
      if (state.complexity) {
        html += renderComplexity(state.complexity);
      }
    } else if (state.runResult === 'incorrect') {
      let tip = '';
      if (state.attempts >= 3) {
        const q = currentQ();
        tip = `<div style="margin-top:8px;font-size:11px;opacity:.7;">💡 Try using a different approach or check edge cases.</div>`;
      }
      html += `<div class="result error">
        <div class="result-title">❌ Incorrect</div>
        <div class="result-body">Your code doesn't produce the expected output. Review your logic and try again.${tip}</div>
      </div>`;
    } else if (!state.langMismatch) {
      html = `<div class="empty-state"><div class="empty-icon">⚡</div><div>Write your solution</div><div>and click Run &amp; Validate</div></div>`;
    }
    body.innerHTML = html;
  }
  else if (tab === 'hints') {
    if (!state.hints) {
      body.innerHTML = `<div class="empty-state"><div class="empty-icon">💡</div><div>Click "Show Hints"</div><div>to get progressive hints</div></div>`;
      return;
    }
    const lines = state.hints.split('\n')
      .map(l => l.replace(/^\d+[.):\-]\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1').trim())
      .filter(Boolean).slice(0, 6);
    let html = `<div class="sec-div">Progressive Hints</div><div class="hint-grid">`;
    lines.forEach((h, i) => {
      html += `<div class="hint-card" style="animation-delay:${i*0.05}s"><div class="hint-n">HINT ${i+1}</div>${escHtml(h)}</div>`;
    });
    html += '</div>';
    body.innerHTML = html;
  }
  else if (tab === 'errors') {
    if (!state.errors) {
      body.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div>Click "Show Errors"</div><div>to analyze your code</div></div>`;
      return;
    }
    body.innerHTML = renderErrors(state.errors);
  }
  else if (tab === 'solution') {
    if (!state.solution) {
      body.innerHTML = `<div class="empty-state"><div class="empty-icon">🔓</div><div>Available after 4 attempts</div><div>Click "Solution" to reveal</div></div>`;
      return;
    }
    body.innerHTML = renderSolution(state.solution);
  }
}

function renderComplexity(raw) {
  try {
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) throw new Error();
    const cx = JSON.parse(m[0]);
    return `<div class="sec-div">Complexity Analysis</div>
    <div class="cx-grid">
      <div class="cx-card"><div class="cx-lbl">⏱ Time</div><div class="cx-val">${escHtml(cx.time||'N/A')}</div><div class="cx-note">${escHtml(cx.time_reason||'')}</div></div>
      <div class="cx-card"><div class="cx-lbl">🗂 Space</div><div class="cx-val">${escHtml(cx.space||'N/A')}</div><div class="cx-note">${escHtml(cx.space_reason||'')}</div></div>
    </div>`;
  } catch {
    return `<div class="result info"><div class="result-body">${escHtml(raw)}</div></div>`;
  }
}

function renderErrors(raw) {
  if (raw.startsWith('❗') || raw.startsWith('❌') || raw.startsWith('⏱️') || raw.startsWith('🌐')) {
    return `<div class="result error"><div class="result-body">${escHtml(raw)}</div></div>`;
  }
  if (raw.toLowerCase().includes('no errors found') || raw.toLowerCase().includes('code looks correct')) {
    return `<div class="result success"><div class="result-title">✅ No Errors Found</div><div class="result-body">Code looks syntactically and logically correct.</div></div>`;
  }
  // Try to parse sections
  const norm = raw.replace(/\*\*(\d+\.)/g, '$1').replace(/\*\*([A-Z ]+:)\*\*/g, '$1');
  const parts = norm.trim().split(/\n(?=\d+\.)/);
  let syntax = [], logic = [], overall = [];
  parts.forEach(p => {
    p = p.trim();
    if (/^1\./.test(p)) syntax = p.replace(/^1\.\s*(SYNTAX ERRORS?:?\s*)/i,'').trim().split('\n').map(l=>l.trim()).filter(Boolean);
    else if (/^2\./.test(p)) logic = p.replace(/^2\.\s*(LOGICAL ERRORS?:?\s*)/i,'').trim().split('\n').map(l=>l.trim()).filter(Boolean);
    else if (/^3\./.test(p)) overall = p.replace(/^3\.\s*(OVERALL:?\s*)/i,'').trim().split('\n').map(l=>l.trim()).filter(Boolean);
  });
  if (!syntax.length && !logic.length && !overall.length) overall = raw.split('\n').map(l=>l.trim()).filter(Boolean);

  const stripMd = t => t.replace(/\*\*(.*?)\*\*/g,'$1').replace(/\*(.*?)\*/g,'$1').replace(/`(.*?)`/g,'$1').replace(/^[-•]\s*/,'').trim();
  const renderLines = (lines, cls) => lines.map(l => `<div class="err-line ${cls}">${escHtml(stripMd(l))}</div>`).join('');

  let html = '';
  if (syntax.length) {
    const hasErr = !syntax.join(' ').match(/\bnone\b/i);
    html += `<div class="err-section"><div class="err-section-title syntax">🔴 Syntax Errors</div>${renderLines(syntax, hasErr ? '' : 'ok')}</div>`;
  }
  if (logic.length) {
    const hasErr = !logic.join(' ').match(/\bnone\b/i);
    html += `<div class="err-section"><div class="err-section-title logic">🟡 Logical Errors</div>${renderLines(logic, hasErr ? 'logic' : 'ok')}</div>`;
  }
  if (overall.length) {
    html += `<div class="err-section"><div class="err-section-title overall">📋 Overall</div>${renderLines(overall, 'ok')}</div>`;
  }
  return html || `<div class="result warn"><div class="result-body">${escHtml(raw)}</div></div>`;
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderSolution(raw) {
  if (raw.startsWith('❗') || raw.startsWith('❌')) {
    return `<div class="result error"><div class="result-body">${escHtml(raw)}</div></div>`;
  }
  // Parse CODE and EXPLANATION blocks
  const codeMatch = raw.match(/CODE:\s*```[\w]*\n?([\s\S]*?)```/i);
  const explMatch = raw.match(/EXPLANATION:\s*([\s\S]+)/i);

  const code = codeMatch ? codeMatch[1].trim() : raw.trim();
  const explanation = explMatch ? explMatch[1].trim() : '';

  const langLabel = LANG_LABEL[state.lang] || state.lang;
  let html = `<div class="sec-div">Complete Solution</div>`;
  const escapedForCopy = code.replace(/`/g,'\\`').replace(/\$/g,'\\$');
  html += `<div class="solution-block">
    <div class="solution-code-header">
      <span>${langLabel}</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <button class="icon-btn" onclick="copySolution(this, \`${escapedForCopy}\`)">⧉ Copy</button>
        <span style="color:var(--txt3);">solution.${EXT[state.lang]||'txt'}</span>
      </div>
    </div>
    <div class="solution-code">${escHtml(code)}</div>`;

  if (explanation) {
    const paras = explanation.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
    const paraHtml = paras.map(p =>
      `<p>${escHtml(p).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`
    ).join('');
    html += `<div class="solution-explanation"><div class="sec-div" style="margin-top:0;">Explanation</div>${paraHtml}</div>`;
  }

  html += `</div>`;
  return html;
}

// ──────────────────────────────────────────────────────────────────────────
// COPY / CLEAR HELPERS
// ──────────────────────────────────────────────────────────────────────────
function copyCode() {
  const code = document.getElementById('code-editor').value;
  if (!code.trim()) return;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copy-code-btn');
    btn.classList.add('copied');
    btn.textContent = '✓ Copied';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⧉ Copy'; }, 1800);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = code; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });
}
function clearCode() {
  const editor = document.getElementById('code-editor');
  editor.value = '';
  document.getElementById('run-btn').disabled = true;
  updateLineNumbers();
  resetAttempts();
}
function copySolution(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied'); btn.textContent = '✓ Copied';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⧉ Copy'; }, 1800);
  }).catch(() => {});
}

// ──────────────────────────────────────────────────────────────────────────
// START
// ──────────────────────────────────────────────────────────────────────────
init();
