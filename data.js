// ──────────────────────────────────────────────────────────────────────────
// DSA QUESTIONS DATA
// ──────────────────────────────────────────────────────────────────────────

const DSA = {
  "Arrays": [
    {
      "id": "arr1",
      "question": "Find the maximum subarray sum.",
      "difficulty": "Easy",
      "sample_input": "[-2,1,-3,4,-1,2,1,-5,4]",
      "expected_output": "6",
      "function_signature": {
        "python": "def max_subarray_sum(arr):",
        "javascript": "function maxSubarraySum(arr) {",
        "java": "public int maxSubarraySum(int[] arr) {",
        "c": "int maxSubarraySum(int arr[], int n) {",
        "cpp": "int maxSubarraySum(vector<int>& arr) {"
      }
    },
    {
      "id": "arr2",
      "question": "Find the missing number in an array of 0 to n.",
      "difficulty": "Easy",
      "sample_input": "[3, 0, 1]",
      "expected_output": "2",
      "function_signature": {
        "python": "def missing_number(nums):",
        "javascript": "function missingNumber(nums) {",
        "java": "public int missingNumber(int[] nums) {",
        "c": "int missingNumber(int nums[], int n) {",
        "cpp": "int missingNumber(vector<int>& nums) {"
      }
    },
    {
      "id": "arr3",
      "question": "Rotate an array to the right by k steps.",
      "difficulty": "Medium",
      "sample_input": "nums = [1,2,3,4,5,6,7], k = 3",
      "expected_output": "[5,6,7,1,2,3,4]",
      "function_signature": {
        "python": "def rotate(nums, k):",
        "javascript": "function rotate(nums, k) {",
        "java": "public void rotate(int[] nums, int k) {",
        "c": "void rotate(int nums[], int n, int k) {",
        "cpp": "void rotate(vector<int>& nums, int k) {"
      }
    },
    {
      "id": "arr4",
      "question": "Find all pairs in an array that sum to a target.",
      "difficulty": "Medium",
      "sample_input": "nums = [1,2,3,4,5], target = 5",
      "expected_output": "[(1,4),(2,3)]",
      "function_signature": {
        "python": "def find_pairs(nums, target):",
        "javascript": "function findPairs(nums, target) {",
        "java": "public List<int[]> findPairs(int[] nums, int target) {",
        "c": "void findPairs(int nums[], int n, int target) {",
        "cpp": "vector<pair<int,int>> findPairs(vector<int>& nums, int target) {"
      }
    },
    {
      "id": "arr5",
      "question": "Move all zeroes to the end of the array without changing order of non-zero elements.",
      "difficulty": "Easy",
      "sample_input": "[0,1,0,3,12]",
      "expected_output": "[1,3,12,0,0]",
      "function_signature": {
        "python": "def move_zeroes(nums):",
        "javascript": "function moveZeroes(nums) {",
        "java": "public void moveZeroes(int[] nums) {",
        "c": "void moveZeroes(int nums[], int n) {",
        "cpp": "void moveZeroes(vector<int>& nums) {"
      }
    },
    {
      "id": "arr6",
      "question": "Find the intersection of two arrays.",
      "difficulty": "Easy",
      "sample_input": "nums1 = [1,2,2,1], nums2 = [2,2]",
      "expected_output": "[2]",
      "function_signature": {
        "python": "def intersect(nums1, nums2):",
        "javascript": "function intersect(nums1, nums2) {",
        "java": "public int[] intersect(int[] nums1, int[] nums2) {",
        "c": "int* intersect(int* nums1, int n1, int* nums2, int n2, int* returnSize) {",
        "cpp": "vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {"
      }
    },
    {
      "id": "arr7",
      "question": "Find the product of array except self (no division).",
      "difficulty": "Medium",
      "sample_input": "[1,2,3,4]",
      "expected_output": "[24,12,8,6]",
      "function_signature": {
        "python": "def product_except_self(nums):",
        "javascript": "function productExceptSelf(nums) {",
        "java": "public int[] productExceptSelf(int[] nums) {",
        "c": "int* productExceptSelf(int* nums, int n, int* returnSize) {",
        "cpp": "vector<int> productExceptSelf(vector<int>& nums) {"
      }
    },
    {
      "id": "arr8",
      "question": "Find the maximum product subarray.",
      "difficulty": "Medium",
      "sample_input": "[2,3,-2,4]",
      "expected_output": "6",
      "function_signature": {
        "python": "def max_product(nums):",
        "javascript": "function maxProduct(nums) {",
        "java": "public int maxProduct(int[] nums) {",
        "c": "int maxProduct(int* nums, int n) {",
        "cpp": "int maxProduct(vector<int>& nums) {"
      }
    },
    {
      "id": "arr9",
      "question": "Merge two sorted arrays into one sorted array.",
      "difficulty": "Easy",
      "sample_input": "nums1 = [1,2,3], nums2 = [2,5,6]",
      "expected_output": "[1,2,2,3,5,6]",
      "function_signature": {
        "python": "def merge_sorted(nums1, nums2):",
        "javascript": "function mergeSorted(nums1, nums2) {",
        "java": "public int[] mergeSorted(int[] nums1, int[] nums2) {",
        "c": "int* mergeSorted(int* nums1, int n1, int* nums2, int n2) {",
        "cpp": "vector<int> mergeSorted(vector<int>& nums1, vector<int>& nums2) {"
      }
    },
    {
      "id": "arr10",
      "question": "Find the minimum in a rotated sorted array.",
      "difficulty": "Hard",
      "sample_input": "[3,4,5,1,2]",
      "expected_output": "1",
      "function_signature": {
        "python": "def find_min(nums):",
        "javascript": "function findMin(nums) {",
        "java": "public int findMin(int[] nums) {",
        "c": "int findMin(int* nums, int n) {",
        "cpp": "int findMin(vector<int>& nums) {"
      }
    },
    {
      "id": "arr11",
      "question": "Find the longest increasing subsequence length.",
      "difficulty": "Hard",
      "sample_input": "[10,9,2,5,3,7,101,18]",
      "expected_output": "4",
      "function_signature": {
        "python": "def length_of_lis(nums):",
        "javascript": "function lengthOfLIS(nums) {",
        "java": "public int lengthOfLIS(int[] nums) {",
        "c": "int lengthOfLIS(int* nums, int n) {",
        "cpp": "int lengthOfLIS(vector<int>& nums) {"
      }
    },
    {
      "id": "arr12",
      "question": "Trap rainwater between bars given height array.",
      "difficulty": "Hard",
      "sample_input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
      "expected_output": "6",
      "function_signature": {
        "python": "def trap(height):",
        "javascript": "function trap(height) {",
        "java": "public int trap(int[] height) {",
        "c": "int trap(int* height, int n) {",
        "cpp": "int trap(vector<int>& height) {"
      }
    },
    {
      "id": "arr13",
      "question": "Find all triplets that sum to zero (3Sum).",
      "difficulty": "Medium",
      "sample_input": "[-1,0,1,2,-1,-4]",
      "expected_output": "[[-1,-1,2],[-1,0,1]]",
      "function_signature": {
        "python": "def three_sum(nums):",
        "javascript": "function threeSum(nums) {",
        "java": "public List<List<Integer>> threeSum(int[] nums) {",
        "c": "int** threeSum(int* nums, int n, int* returnSize) {",
        "cpp": "vector<vector<int>> threeSum(vector<int>& nums) {"
      }
    },
    {
      "id": "arr14",
      "question": "Sort array of 0s, 1s, 2s in-place (Dutch National Flag).",
      "difficulty": "Medium",
      "sample_input": "[2,0,2,1,1,0]",
      "expected_output": "[0,0,1,1,2,2]",
      "function_signature": {
        "python": "def sort_colors(nums):",
        "javascript": "function sortColors(nums) {",
        "java": "public void sortColors(int[] nums) {",
        "c": "void sortColors(int* nums, int n) {",
        "cpp": "void sortColors(vector<int>& nums) {"
      }
    },
    {
      "id": "arr15",
      "question": "Find subarray with maximum average of length k.",
      "difficulty": "Medium",
      "sample_input": "nums = [1,12,-5,-6,50,3], k = 4",
      "expected_output": "12.75",
      "function_signature": {
        "python": "def find_max_average(nums, k):",
        "javascript": "function findMaxAverage(nums, k) {",
        "java": "public double findMaxAverage(int[] nums, int k) {",
        "c": "double findMaxAverage(int* nums, int n, int k) {",
        "cpp": "double findMaxAverage(vector<int>& nums, int k) {"
      }
    }
  ],
  "Strings": [
    {
      "id": "str1",
      "question": "Find the longest palindromic substring in a string.",
      "difficulty": "Medium",
      "sample_input": "\"babad\"",
      "expected_output": "\"bab\"",
      "function_signature": {
        "python": "def longest_palindrome(s):",
        "javascript": "function longestPalindrome(s) {",
        "java": "public String longestPalindrome(String s) {",
        "c": "char* longestPalindrome(char* s) {",
        "cpp": "string longestPalindrome(string s) {"
      }
    },
    {
      "id": "str2",
      "question": "Check if two strings are anagrams.",
      "difficulty": "Easy",
      "sample_input": "\"anagram\", \"nagaram\"",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_anagram(s, t):",
        "javascript": "function isAnagram(s, t) {",
        "java": "public boolean isAnagram(String s, String t) {",
        "c": "int isAnagram(char* s, char* t) {",
        "cpp": "bool isAnagram(string s, string t) {"
      }
    },
    {
      "id": "str3",
      "question": "Reverse words in a sentence.",
      "difficulty": "Easy",
      "sample_input": "\"the sky is blue\"",
      "expected_output": "\"blue is sky the\"",
      "function_signature": {
        "python": "def reverse_words(s):",
        "javascript": "function reverseWords(s) {",
        "java": "public String reverseWords(String s) {",
        "c": "void reverseWords(char* s) {",
        "cpp": "string reverseWords(string s) {"
      }
    },
    {
      "id": "str4",
      "question": "Find the longest substring without repeating characters.",
      "difficulty": "Medium",
      "sample_input": "\"abcabcbb\"",
      "expected_output": "3",
      "function_signature": {
        "python": "def length_of_longest_substring(s):",
        "javascript": "function lengthOfLongestSubstring(s) {",
        "java": "public int lengthOfLongestSubstring(String s) {",
        "c": "int lengthOfLongestSubstring(char* s) {",
        "cpp": "int lengthOfLongestSubstring(string s) {"
      }
    },
    {
      "id": "str5",
      "question": "Check if a string is a valid palindrome (ignore non-alphanumeric).",
      "difficulty": "Easy",
      "sample_input": "\"A man, a plan, a canal: Panama\"",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_palindrome(s):",
        "javascript": "function isPalindrome(s) {",
        "java": "public boolean isPalindrome(String s) {",
        "c": "int isPalindrome(char* s) {",
        "cpp": "bool isPalindrome(string s) {"
      }
    },
    {
      "id": "str6",
      "question": "Count and say: generate the nth term of the count-and-say sequence.",
      "difficulty": "Medium",
      "sample_input": "n = 4",
      "expected_output": "\"1211\"",
      "function_signature": {
        "python": "def count_and_say(n):",
        "javascript": "function countAndSay(n) {",
        "java": "public String countAndSay(int n) {",
        "c": "char* countAndSay(int n) {",
        "cpp": "string countAndSay(int n) {"
      }
    },
    {
      "id": "str7",
      "question": "Implement strStr() \u2014 find the first occurrence of needle in haystack.",
      "difficulty": "Easy",
      "sample_input": "haystack = \"hello\", needle = \"ll\"",
      "expected_output": "2",
      "function_signature": {
        "python": "def str_str(haystack, needle):",
        "javascript": "function strStr(haystack, needle) {",
        "java": "public int strStr(String haystack, String needle) {",
        "c": "int strStr(char* haystack, char* needle) {",
        "cpp": "int strStr(string haystack, string needle) {"
      }
    },
    {
      "id": "str8",
      "question": "Check if a string has balanced parentheses.",
      "difficulty": "Easy",
      "sample_input": "\"()[]{}\"",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_valid(s):",
        "javascript": "function isValid(s) {",
        "java": "public boolean isValid(String s) {",
        "c": "int isValid(char* s) {",
        "cpp": "bool isValid(string s) {"
      }
    },
    {
      "id": "str9",
      "question": "Given a string, find the minimum number of characters to insert to make it a palindrome.",
      "difficulty": "Hard",
      "sample_input": "\"ab\"",
      "expected_output": "1",
      "function_signature": {
        "python": "def min_insertions(s):",
        "javascript": "function minInsertions(s) {",
        "java": "public int minInsertions(String s) {",
        "c": "int minInsertions(char* s) {",
        "cpp": "int minInsertions(string s) {"
      }
    },
    {
      "id": "str10",
      "question": "Find all permutations of a given string.",
      "difficulty": "Medium",
      "sample_input": "\"abc\"",
      "expected_output": "[\"abc\",\"acb\",\"bac\",\"bca\",\"cab\",\"cba\"]",
      "function_signature": {
        "python": "def permutations(s):",
        "javascript": "function permutations(s) {",
        "java": "public List<String> permutations(String s) {",
        "c": "char** permutations(char* s, int* returnSize) {",
        "cpp": "vector<string> permutations(string s) {"
      }
    },
    {
      "id": "str11",
      "question": "Decode encoded string k[encoded_string] (e.g. 3[a2[b]] = abbabbabb).",
      "difficulty": "Hard",
      "sample_input": "3[a2[b]]",
      "expected_output": "abbabbabb",
      "function_signature": {
        "python": "def decode_string(s):",
        "javascript": "function decodeString(s) {",
        "java": "public String decodeString(String s) {",
        "c": "char* decodeString(char* s) {",
        "cpp": "string decodeString(string s) {"
      }
    },
    {
      "id": "str12",
      "question": "Find the minimum window substring containing all chars of t.",
      "difficulty": "Hard",
      "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
      "expected_output": "\"BANC\"",
      "function_signature": {
        "python": "def min_window(s, t):",
        "javascript": "function minWindow(s, t) {",
        "java": "public String minWindow(String s, String t) {",
        "c": "char* minWindow(char* s, char* t) {",
        "cpp": "string minWindow(string s, string t) {"
      }
    },
    {
      "id": "str13",
      "question": "Implement wildcard pattern matching with ? and *.",
      "difficulty": "Medium",
      "sample_input": "s = \"aa\", p = \"a*\"",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_match(s, p):",
        "javascript": "function isMatch(s, p) {",
        "java": "public boolean isMatch(String s, String p) {",
        "c": "bool isMatch(char* s, char* p) {",
        "cpp": "bool isMatch(string s, string p) {"
      }
    },
    {
      "id": "str14",
      "question": "Zigzag convert string with numRows rows.",
      "difficulty": "Medium",
      "sample_input": "s = \"PAYPALISHIRING\", numRows = 3",
      "expected_output": "\"PAHNAPLSIIGYIR\"",
      "function_signature": {
        "python": "def convert(s, numRows):",
        "javascript": "function convert(s, numRows) {",
        "java": "public String convert(String s, int numRows) {",
        "c": "char* convert(char* s, int numRows) {",
        "cpp": "string convert(string s, int numRows) {"
      }
    },
    {
      "id": "str15",
      "question": "Find the longest common prefix among an array of strings.",
      "difficulty": "Medium",
      "sample_input": "[\"flower\",\"flow\",\"flight\"]",
      "expected_output": "\"fl\"",
      "function_signature": {
        "python": "def longest_common_prefix(strs):",
        "javascript": "function longestCommonPrefix(strs) {",
        "java": "public String longestCommonPrefix(String[] strs) {",
        "c": "char* longestCommonPrefix(char** strs, int n) {",
        "cpp": "string longestCommonPrefix(vector<string>& strs) {"
      }
    }
  ],
  "Linked List": [
    {
      "id": "ll1",
      "question": "Detect cycle in a linked list.",
      "difficulty": "Medium",
      "sample_input": "head = [3,2,0,-4], pos = 1",
      "expected_output": "True",
      "function_signature": {
        "python": "def hasCycle(head):",
        "javascript": "function hasCycle(head) {",
        "java": "public boolean hasCycle(ListNode head) {",
        "c": "bool hasCycle(struct ListNode *head) {",
        "cpp": "bool hasCycle(ListNode *head) {"
      }
    },
    {
      "id": "ll2",
      "question": "Reverse a singly linked list.",
      "difficulty": "Easy",
      "sample_input": "[1,2,3,4,5]",
      "expected_output": "[5,4,3,2,1]",
      "function_signature": {
        "python": "def reverseList(head):",
        "javascript": "function reverseList(head) {",
        "java": "public ListNode reverseList(ListNode head) {",
        "c": "struct ListNode* reverseList(struct ListNode* head) {",
        "cpp": "ListNode* reverseList(ListNode* head) {"
      }
    },
    {
      "id": "ll3",
      "question": "Find the middle node of a linked list.",
      "difficulty": "Easy",
      "sample_input": "[1,2,3,4,5]",
      "expected_output": "3",
      "function_signature": {
        "python": "def middleNode(head):",
        "javascript": "function middleNode(head) {",
        "java": "public ListNode middleNode(ListNode head) {",
        "c": "struct ListNode* middleNode(struct ListNode* head) {",
        "cpp": "ListNode* middleNode(ListNode* head) {"
      }
    },
    {
      "id": "ll4",
      "question": "Merge two sorted linked lists.",
      "difficulty": "Medium",
      "sample_input": "l1 = [1,2,4], l2 = [1,3,4]",
      "expected_output": "[1,1,2,3,4,4]",
      "function_signature": {
        "python": "def mergeTwoLists(l1, l2):",
        "javascript": "function mergeTwoLists(l1, l2) {",
        "java": "public ListNode mergeTwoLists(ListNode l1, ListNode l2) {",
        "c": "struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {",
        "cpp": "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {"
      }
    },
    {
      "id": "ll5",
      "question": "Remove the nth node from the end of a linked list.",
      "difficulty": "Hard",
      "sample_input": "head = [1,2,3,4,5], n = 2",
      "expected_output": "[1,2,3,5]",
      "function_signature": {
        "python": "def removeNthFromEnd(head, n):",
        "javascript": "function removeNthFromEnd(head, n) {",
        "java": "public ListNode removeNthFromEnd(ListNode head, int n) {",
        "c": "struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {",
        "cpp": "ListNode* removeNthFromEnd(ListNode* head, int n) {"
      }
    },
    {
      "id": "ll6",
      "question": "Check if a linked list is a palindrome.",
      "difficulty": "Medium",
      "sample_input": "[1,2,2,1]",
      "expected_output": "True",
      "function_signature": {
        "python": "def isPalindrome(head):",
        "javascript": "function isPalindrome(head) {",
        "java": "public boolean isPalindrome(ListNode head) {",
        "c": "bool isPalindrome(struct ListNode* head) {",
        "cpp": "bool isPalindrome(ListNode* head) {"
      }
    },
    {
      "id": "ll7",
      "question": "Find the intersection point of two linked lists.",
      "difficulty": "Medium",
      "sample_input": "listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]",
      "expected_output": "8",
      "function_signature": {
        "python": "def getIntersectionNode(headA, headB):",
        "javascript": "function getIntersectionNode(headA, headB) {",
        "java": "public ListNode getIntersectionNode(ListNode headA, ListNode headB) {",
        "c": "struct ListNode* getIntersectionNode(struct ListNode* headA, struct ListNode* headB) {",
        "cpp": "ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {"
      }
    },
    {
      "id": "ll8",
      "question": "Sort a linked list using merge sort.",
      "difficulty": "Hard",
      "sample_input": "[4,2,1,3]",
      "expected_output": "[1,2,3,4]",
      "function_signature": {
        "python": "def sortList(head):",
        "javascript": "function sortList(head) {",
        "java": "public ListNode sortList(ListNode head) {",
        "c": "struct ListNode* sortList(struct ListNode* head) {",
        "cpp": "ListNode* sortList(ListNode* head) {"
      }
    },
    {
      "id": "ll9",
      "question": "Remove duplicates from a sorted linked list.",
      "difficulty": "Easy",
      "sample_input": "[1,1,2,3,3]",
      "expected_output": "[1,2,3]",
      "function_signature": {
        "python": "def deleteDuplicates(head):",
        "javascript": "function deleteDuplicates(head) {",
        "java": "public ListNode deleteDuplicates(ListNode head) {",
        "c": "struct ListNode* deleteDuplicates(struct ListNode* head) {",
        "cpp": "ListNode* deleteDuplicates(ListNode* head) {"
      }
    },
    {
      "id": "ll10",
      "question": "Rotate a linked list to the right by k places.",
      "difficulty": "Medium",
      "sample_input": "head = [1,2,3,4,5], k = 2",
      "expected_output": "[4,5,1,2,3]",
      "function_signature": {
        "python": "def rotateRight(head, k):",
        "javascript": "function rotateRight(head, k) {",
        "java": "public ListNode rotateRight(ListNode head, int k) {",
        "c": "struct ListNode* rotateRight(struct ListNode* head, int k) {",
        "cpp": "ListNode* rotateRight(ListNode* head, int k) {"
      }
    },
    {
      "id": "ll11",
      "question": "Reverse linked list in groups of k.",
      "difficulty": "Hard",
      "sample_input": "head = [1,2,3,4,5], k = 2",
      "expected_output": "[2,1,4,3,5]",
      "function_signature": {
        "python": "def reverseKGroup(head, k):",
        "javascript": "function reverseKGroup(head, k) {",
        "java": "public ListNode reverseKGroup(ListNode head, int k) {",
        "c": "struct ListNode* reverseKGroup(struct ListNode* head, int k) {",
        "cpp": "ListNode* reverseKGroup(ListNode* head, int k) {"
      }
    },
    {
      "id": "ll12",
      "question": "Add two numbers represented as linked lists.",
      "difficulty": "Medium",
      "sample_input": "l1 = [2,4,3], l2 = [5,6,4]",
      "expected_output": "[7,0,8]",
      "function_signature": {
        "python": "def addTwoNumbers(l1, l2):",
        "javascript": "function addTwoNumbers(l1, l2) {",
        "java": "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {",
        "c": "struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {",
        "cpp": "ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {"
      }
    },
    {
      "id": "ll13",
      "question": "Swap adjacent nodes in a linked list.",
      "difficulty": "Medium",
      "sample_input": "[1,2,3,4]",
      "expected_output": "[2,1,4,3]",
      "function_signature": {
        "python": "def swapPairs(head):",
        "javascript": "function swapPairs(head) {",
        "java": "public ListNode swapPairs(ListNode head) {",
        "c": "struct ListNode* swapPairs(struct ListNode* head) {",
        "cpp": "ListNode* swapPairs(ListNode* head) {"
      }
    },
    {
      "id": "ll14",
      "question": "Find the start node of cycle in a linked list.",
      "difficulty": "Medium",
      "sample_input": "head = [3,2,0,-4], pos = 1",
      "expected_output": "2",
      "function_signature": {
        "python": "def detectCycle(head):",
        "javascript": "function detectCycle(head) {",
        "java": "public ListNode detectCycle(ListNode head) {",
        "c": "struct ListNode* detectCycle(struct ListNode* head) {",
        "cpp": "ListNode* detectCycle(ListNode* head) {"
      }
    },
    {
      "id": "ll15",
      "question": "Flatten a multilevel doubly linked list.",
      "difficulty": "Hard",
      "sample_input": "[1,2,3,4,5,6,null,null,null,7,8,9,10]",
      "expected_output": "[1,2,3,7,8,9,10,4,5,6]",
      "function_signature": {
        "python": "def flatten(head):",
        "javascript": "function flatten(head) {",
        "java": "public Node flatten(Node head) {",
        "c": "struct Node* flatten(struct Node* head) {",
        "cpp": "Node* flatten(Node* head) {"
      }
    }
  ],
  "HashMap": [
    {
      "id": "hash1",
      "question": "Two sum problem.",
      "difficulty": "Easy",
      "sample_input": "nums = [2,7,11,15], target = 9",
      "expected_output": "[0,1]",
      "function_signature": {
        "python": "def twoSum(nums, target):",
        "javascript": "function twoSum(nums, target) {",
        "java": "public int[] twoSum(int[] nums, int target) {",
        "c": "int* twoSum(int* nums, int numsSize, int target) {",
        "cpp": "vector<int> twoSum(vector<int>& nums, int target) {"
      }
    },
    {
      "id": "hash2",
      "question": "First unique character in a string.",
      "difficulty": "Easy",
      "sample_input": "\"leetcode\"",
      "expected_output": "0",
      "function_signature": {
        "python": "def firstUniqChar(s):",
        "javascript": "function firstUniqChar(s) {",
        "java": "public int firstUniqChar(String s) {",
        "c": "int firstUniqChar(char* s) {",
        "cpp": "int firstUniqChar(string s) {"
      }
    },
    {
      "id": "hash3",
      "question": "Group anagrams together from a list of strings.",
      "difficulty": "Medium",
      "sample_input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      "expected_output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
      "function_signature": {
        "python": "def groupAnagrams(strs):",
        "javascript": "function groupAnagrams(strs) {",
        "java": "public List<List<String>> groupAnagrams(String[] strs) {",
        "c": "char*** groupAnagrams(char** strs, int strsSize) {",
        "cpp": "vector<vector<string>> groupAnagrams(vector<string>& strs) {"
      }
    },
    {
      "id": "hash4",
      "question": "Find the most frequent element in an array.",
      "difficulty": "Easy",
      "sample_input": "[1,2,2,3,3,3]",
      "expected_output": "3",
      "function_signature": {
        "python": "def most_frequent(nums):",
        "javascript": "function mostFrequent(nums) {",
        "java": "public int mostFrequent(int[] nums) {",
        "c": "int mostFrequent(int nums[], int n) {",
        "cpp": "int mostFrequent(vector<int>& nums) {"
      }
    },
    {
      "id": "hash5",
      "question": "Find all elements that appear more than n/3 times.",
      "difficulty": "Hard",
      "sample_input": "[3,2,3]",
      "expected_output": "[3]",
      "function_signature": {
        "python": "def majority_element(nums):",
        "javascript": "function majorityElement(nums) {",
        "java": "public List<Integer> majorityElement(int[] nums) {",
        "c": "int* majorityElement(int* nums, int n) {",
        "cpp": "vector<int> majorityElement(vector<int>& nums) {"
      }
    },
    {
      "id": "hash6",
      "question": "Find the length of the longest consecutive sequence in an array.",
      "difficulty": "Medium",
      "sample_input": "[100,4,200,1,3,2]",
      "expected_output": "4",
      "function_signature": {
        "python": "def longestConsecutive(nums):",
        "javascript": "function longestConsecutive(nums) {",
        "java": "public int longestConsecutive(int[] nums) {",
        "c": "int longestConsecutive(int* nums, int n) {",
        "cpp": "int longestConsecutive(vector<int>& nums) {"
      }
    },
    {
      "id": "hash7",
      "question": "Given an array, return the number of subarrays with sum equal to k.",
      "difficulty": "Medium",
      "sample_input": "nums = [1,1,1], k = 2",
      "expected_output": "2",
      "function_signature": {
        "python": "def subarray_sum(nums, k):",
        "javascript": "function subarraySum(nums, k) {",
        "java": "public int subarraySum(int[] nums, int k) {",
        "c": "int subarraySum(int* nums, int n, int k) {",
        "cpp": "int subarraySum(vector<int>& nums, int k) {"
      }
    },
    {
      "id": "hash8",
      "question": "Find if any two integers in the array sum to zero.",
      "difficulty": "Easy",
      "sample_input": "[-1,0,1,2,-1,-4]",
      "expected_output": "True",
      "function_signature": {
        "python": "def has_zero_sum_pair(nums):",
        "javascript": "function hasZeroSumPair(nums) {",
        "java": "public boolean hasZeroSumPair(int[] nums) {",
        "c": "bool hasZeroSumPair(int* nums, int n) {",
        "cpp": "bool hasZeroSumPair(vector<int>& nums) {"
      }
    },
    {
      "id": "hash9",
      "question": "Find the top k frequent elements in an array.",
      "difficulty": "Medium",
      "sample_input": "nums = [1,1,1,2,2,3], k = 2",
      "expected_output": "[1,2]",
      "function_signature": {
        "python": "def top_k_frequent(nums, k):",
        "javascript": "function topKFrequent(nums, k) {",
        "java": "public int[] topKFrequent(int[] nums, int k) {",
        "c": "int* topKFrequent(int* nums, int n, int k) {",
        "cpp": "vector<int> topKFrequent(vector<int>& nums, int k) {"
      }
    },
    {
      "id": "hash10",
      "question": "Check if two strings are isomorphic.",
      "difficulty": "Easy",
      "sample_input": "s = \"egg\", t = \"add\"",
      "expected_output": "True",
      "function_signature": {
        "python": "def isIsomorphic(s, t):",
        "javascript": "function isIsomorphic(s, t) {",
        "java": "public boolean isIsomorphic(String s, String t) {",
        "c": "bool isIsomorphic(char* s, char* t) {",
        "cpp": "bool isIsomorphic(string s, string t) {"
      }
    },
    {
      "id": "hash11",
      "question": "Find longest subarray with equal number of 0s and 1s.",
      "difficulty": "Hard",
      "sample_input": "[0,1,0,1,1,0,1]",
      "expected_output": "6",
      "function_signature": {
        "python": "def find_max_length(nums):",
        "javascript": "function findMaxLength(nums) {",
        "java": "public int findMaxLength(int[] nums) {",
        "c": "int findMaxLength(int* nums, int n) {",
        "cpp": "int findMaxLength(vector<int>& nums) {"
      }
    },
    {
      "id": "hash12",
      "question": "Count pairs of songs whose total duration is divisible by 60.",
      "difficulty": "Medium",
      "sample_input": "[30,20,150,100,40]",
      "expected_output": "3",
      "function_signature": {
        "python": "def num_pairs_divisible_by60(time):",
        "javascript": "function numPairsDivisibleBy60(time) {",
        "java": "public int numPairsDivisibleBy60(int[] time) {",
        "c": "int numPairsDivisibleBy60(int* time, int n) {",
        "cpp": "int numPairsDivisibleBy60(vector<int>& time) {"
      }
    },
    {
      "id": "hash13",
      "question": "Find number of distinct substrings of length k with exactly k unique chars.",
      "difficulty": "Medium",
      "sample_input": "s = \"havefunonleetcode\", k = 5",
      "expected_output": "6",
      "function_signature": {
        "python": "def num_k_len_substr_no_repeats(s, k):",
        "javascript": "function numKLenSubstrNoRepeats(s, k) {",
        "java": "public int numKLenSubstrNoRepeats(String s, int k) {",
        "c": "int numKLenSubstrNoRepeats(char* s, int k) {",
        "cpp": "int numKLenSubstrNoRepeats(string s, int k) {"
      }
    },
    {
      "id": "hash14",
      "question": "Design RandomizedSet with O(1) insert, delete, getRandom.",
      "difficulty": "Hard",
      "sample_input": "insert(1), insert(2), getRandom(), remove(1), getRandom()",
      "expected_output": "random element from set",
      "function_signature": {
        "python": "class RandomizedSet:\n    def insert(self, val):\n    def remove(self, val):\n    def getRandom(self):",
        "javascript": "class RandomizedSet {\n  insert(val) {}\n  remove(val) {}\n  getRandom() {}",
        "java": "class RandomizedSet {\n  public boolean insert(int val) {}\n  public boolean remove(int val) {}\n  public int getRandom() {}",
        "c": "// Implement RandomizedSet",
        "cpp": "class RandomizedSet {\npublic:\n  bool insert(int val) {}\n  bool remove(int val) {}\n  int getRandom() {}\n};"
      }
    },
    {
      "id": "hash15",
      "question": "Find all pairs (i,j) where nums[i]+nums[j] == nums[i] XOR nums[j].",
      "difficulty": "Medium",
      "sample_input": "[0,1,2,3]",
      "expected_output": "5",
      "function_signature": {
        "python": "def count_pairs(nums):",
        "javascript": "function countPairs(nums) {",
        "java": "public long countPairs(int[] nums) {",
        "c": "long long countPairs(int* nums, int n) {",
        "cpp": "long long countPairs(vector<int>& nums) {"
      }
    }
  ],
  "Graphs": [
    {
      "id": "graph1",
      "question": "Detect cycle in an undirected graph.",
      "difficulty": "Medium",
      "sample_input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
      "expected_output": "True",
      "function_signature": {
        "python": "def has_cycle(n, edges):",
        "javascript": "function hasCycle(n, edges) {",
        "java": "public boolean hasCycle(int n, int[][] edges) {",
        "c": "bool hasCycle(int n, int edges[][2], int edgeCount) {",
        "cpp": "bool hasCycle(int n, vector<vector<int>>& edges) {"
      }
    },
    {
      "id": "graph2",
      "question": "Count number of connected components in an undirected graph.",
      "difficulty": "Medium",
      "sample_input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
      "expected_output": "2",
      "function_signature": {
        "python": "def count_components(n, edges):",
        "javascript": "function countComponents(n, edges) {",
        "java": "public int countComponents(int n, int[][] edges) {",
        "c": "int countComponents(int n, int edges[][2], int edgeCount) {",
        "cpp": "int countComponents(int n, vector<vector<int>>& edges) {"
      }
    },
    {
      "id": "graph3",
      "question": "Find the shortest path in an unweighted graph (BFS).",
      "difficulty": "Medium",
      "sample_input": "n = 6, edges = [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5]], src = 0, dst = 5",
      "expected_output": "3",
      "function_signature": {
        "python": "def shortest_path(n, edges, src, dst):",
        "javascript": "function shortestPath(n, edges, src, dst) {",
        "java": "public int shortestPath(int n, int[][] edges, int src, int dst) {",
        "c": "int shortestPath(int n, int edges[][2], int edgeCount, int src, int dst) {",
        "cpp": "int shortestPath(int n, vector<vector<int>>& edges, int src, int dst) {"
      }
    },
    {
      "id": "graph4",
      "question": "Check if a graph is bipartite.",
      "difficulty": "Hard",
      "sample_input": "graph = [[1,3],[0,2],[1,3],[0,2]]",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_bipartite(graph):",
        "javascript": "function isBipartite(graph) {",
        "java": "public boolean isBipartite(int[][] graph) {",
        "c": "bool isBipartite(int** graph, int n) {",
        "cpp": "bool isBipartite(vector<vector<int>>& graph) {"
      }
    },
    {
      "id": "graph5",
      "question": "Find all paths from source to target in a DAG.",
      "difficulty": "Hard",
      "sample_input": "graph = [[1,2],[3],[3],[]]",
      "expected_output": "[[0,1,3],[0,2,3]]",
      "function_signature": {
        "python": "def all_paths(graph):",
        "javascript": "function allPaths(graph) {",
        "java": "public List<List<Integer>> allPathsSourceTarget(int[][] graph) {",
        "c": "void allPaths(int** graph, int n) {",
        "cpp": "vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {"
      }
    },
    {
      "id": "graph6",
      "question": "Perform topological sort on a directed acyclic graph.",
      "difficulty": "Medium",
      "sample_input": "n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]",
      "expected_output": "[3,2,1,0]",
      "function_signature": {
        "python": "def topological_sort(n, edges):",
        "javascript": "function topologicalSort(n, edges) {",
        "java": "public int[] topologicalSort(int n, int[][] edges) {",
        "c": "int* topologicalSort(int n, int edges[][2], int edgeCount) {",
        "cpp": "vector<int> topologicalSort(int n, vector<vector<int>>& edges) {"
      }
    },
    {
      "id": "graph7",
      "question": "Find the number of islands in a 2D grid.",
      "difficulty": "Medium",
      "sample_input": "grid = [[1,1,0],[0,1,0],[0,0,1]]",
      "expected_output": "2",
      "function_signature": {
        "python": "def num_islands(grid):",
        "javascript": "function numIslands(grid) {",
        "java": "public int numIslands(char[][] grid) {",
        "c": "int numIslands(char** grid, int rows, int cols) {",
        "cpp": "int numIslands(vector<vector<char>>& grid) {"
      }
    },
    {
      "id": "graph8",
      "question": "Clone a graph (deep copy).",
      "difficulty": "Medium",
      "sample_input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
      "expected_output": "[[2,4],[1,3],[2,4],[1,3]]",
      "function_signature": {
        "python": "def cloneGraph(node):",
        "javascript": "function cloneGraph(node) {",
        "java": "public Node cloneGraph(Node node) {",
        "c": "struct Node* cloneGraph(struct Node* node) {",
        "cpp": "Node* cloneGraph(Node* node) {"
      }
    },
    {
      "id": "graph9",
      "question": "Find if a path exists between two nodes in a graph.",
      "difficulty": "Easy",
      "sample_input": "n = 3, edges = [[0,1],[1,2],[2,0]], src = 0, dst = 2",
      "expected_output": "True",
      "function_signature": {
        "python": "def valid_path(n, edges, src, dst):",
        "javascript": "function validPath(n, edges, src, dst) {",
        "java": "public boolean validPath(int n, int[][] edges, int src, int dst) {",
        "c": "bool validPath(int n, int edges[][2], int edgeCount, int src, int dst) {",
        "cpp": "bool validPath(int n, vector<vector<int>>& edges, int src, int dst) {"
      }
    },
    {
      "id": "graph10",
      "question": "Find the minimum spanning tree cost using Kruskal's algorithm.",
      "difficulty": "Hard",
      "sample_input": "n = 4, edges = [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]]",
      "expected_output": "19",
      "function_signature": {
        "python": "def minimum_spanning_tree(n, edges):",
        "javascript": "function minimumSpanningTree(n, edges) {",
        "java": "public int minimumSpanningTree(int n, int[][] edges) {",
        "c": "int minimumSpanningTree(int n, int edges[][3], int edgeCount) {",
        "cpp": "int minimumSpanningTree(int n, vector<vector<int>>& edges) {"
      }
    },
    {
      "id": "graph11",
      "question": "Find critical connections (bridges) in a network.",
      "difficulty": "Hard",
      "sample_input": "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
      "expected_output": "[[1,3]]",
      "function_signature": {
        "python": "def critical_connections(n, connections):",
        "javascript": "function criticalConnections(n, connections) {",
        "java": "public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {",
        "c": "int** criticalConnections(int n, int** connections, int connSize) {",
        "cpp": "vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {"
      }
    },
    {
      "id": "graph12",
      "question": "Find shortest clear path in binary matrix from top-left to bottom-right.",
      "difficulty": "Hard",
      "sample_input": "[[0,0,0],[1,1,0],[1,1,0]]",
      "expected_output": "4",
      "function_signature": {
        "python": "def shortest_path_binary_matrix(grid):",
        "javascript": "function shortestPathBinaryMatrix(grid) {",
        "java": "public int shortestPathBinaryMatrix(int[][] grid) {",
        "c": "int shortestPathBinaryMatrix(int** grid, int n) {",
        "cpp": "int shortestPathBinaryMatrix(vector<vector<int>>& grid) {"
      }
    },
    {
      "id": "graph13",
      "question": "Determine if you can finish all courses given prerequisites.",
      "difficulty": "Medium",
      "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
      "expected_output": "True",
      "function_signature": {
        "python": "def can_finish(numCourses, prerequisites):",
        "javascript": "function canFinish(numCourses, prerequisites) {",
        "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {",
        "c": "bool canFinish(int numCourses, int** prerequisites, int n) {",
        "cpp": "bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {"
      }
    },
    {
      "id": "graph14",
      "question": "Find cheapest flight within k stops using dynamic programming.",
      "difficulty": "Medium",
      "sample_input": "n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1",
      "expected_output": "200",
      "function_signature": {
        "python": "def find_cheapest_price(n, flights, src, dst, k):",
        "javascript": "function findCheapestPrice(n, flights, src, dst, k) {",
        "java": "public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {",
        "c": "int findCheapestPrice(int n, int** flights, int src, int dst, int k) {",
        "cpp": "int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {"
      }
    },
    {
      "id": "graph15",
      "question": "Evaluate division given equation ratios and queries.",
      "difficulty": "Medium",
      "sample_input": "equations=[[\"A\",\"B\"],[\"B\",\"C\"]], values=[2.0,3.0], queries=[[\"A\",\"C\"],[\"B\",\"A\"]]",
      "expected_output": "[6.0,0.5]",
      "function_signature": {
        "python": "def calc_equation(equations, values, queries):",
        "javascript": "function calcEquation(equations, values, queries) {",
        "java": "public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {",
        "c": "double* calcEquation(char*** equations, double* values, char*** queries, int n) {",
        "cpp": "vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {"
      }
    }
  ],
  "Trees": [
    {
      "id": "tree1",
      "question": "Check if a binary tree is symmetric.",
      "difficulty": "Easy",
      "sample_input": "root = [1,2,2,3,4,4,3]",
      "expected_output": "True",
      "function_signature": {
        "python": "def is_symmetric(root):",
        "javascript": "function isSymmetric(root) {",
        "java": "public boolean isSymmetric(TreeNode root) {",
        "c": "bool isSymmetric(struct TreeNode* root) {",
        "cpp": "bool isSymmetric(TreeNode* root) {"
      }
    },
    {
      "id": "tree2",
      "question": "Perform inorder traversal of a binary tree.",
      "difficulty": "Easy",
      "sample_input": "root = [1,null,2,3]",
      "expected_output": "[1,3,2]",
      "function_signature": {
        "python": "def inorder_traversal(root):",
        "javascript": "function inorderTraversal(root) {",
        "java": "public List<Integer> inorderTraversal(TreeNode root) {",
        "c": "int* inorderTraversal(struct TreeNode* root, int* returnSize) {",
        "cpp": "vector<int> inorderTraversal(TreeNode* root) {"
      }
    },
    {
      "id": "tree3",
      "question": "Find the maximum depth of a binary tree.",
      "difficulty": "Easy",
      "sample_input": "root = [3,9,20,null,null,15,7]",
      "expected_output": "3",
      "function_signature": {
        "python": "def maxDepth(root):",
        "javascript": "function maxDepth(root) {",
        "java": "public int maxDepth(TreeNode root) {",
        "c": "int maxDepth(struct TreeNode* root) {",
        "cpp": "int maxDepth(TreeNode* root) {"
      }
    },
    {
      "id": "tree4",
      "question": "Find the lowest common ancestor of two nodes in a BST.",
      "difficulty": "Medium",
      "sample_input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
      "expected_output": "6",
      "function_signature": {
        "python": "def lowestCommonAncestor(root, p, q):",
        "javascript": "function lowestCommonAncestor(root, p, q) {",
        "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {",
        "c": "struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {",
        "cpp": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {"
      }
    },
    {
      "id": "tree5",
      "question": "Level order traversal of a binary tree.",
      "difficulty": "Medium",
      "sample_input": "root = [3,9,20,null,null,15,7]",
      "expected_output": "[[3],[9,20],[15,7]]",
      "function_signature": {
        "python": "def levelOrder(root):",
        "javascript": "function levelOrder(root) {",
        "java": "public List<List<Integer>> levelOrder(TreeNode root) {",
        "c": "int** levelOrder(struct TreeNode* root, int* returnSize) {",
        "cpp": "vector<vector<int>> levelOrder(TreeNode* root) {"
      }
    },
    {
      "id": "tree6",
      "question": "Check if a binary tree is a valid BST.",
      "difficulty": "Medium",
      "sample_input": "root = [2,1,3]",
      "expected_output": "True",
      "function_signature": {
        "python": "def isValidBST(root):",
        "javascript": "function isValidBST(root) {",
        "java": "public boolean isValidBST(TreeNode root) {",
        "c": "bool isValidBST(struct TreeNode* root) {",
        "cpp": "bool isValidBST(TreeNode* root) {"
      }
    },
    {
      "id": "tree7",
      "question": "Find the diameter of a binary tree (longest path between any two nodes).",
      "difficulty": "Medium",
      "sample_input": "root = [1,2,3,4,5]",
      "expected_output": "3",
      "function_signature": {
        "python": "def diameterOfBinaryTree(root):",
        "javascript": "function diameterOfBinaryTree(root) {",
        "java": "public int diameterOfBinaryTree(TreeNode root) {",
        "c": "int diameterOfBinaryTree(struct TreeNode* root) {",
        "cpp": "int diameterOfBinaryTree(TreeNode* root) {"
      }
    },
    {
      "id": "tree8",
      "question": "Construct a binary tree from preorder and inorder traversal.",
      "difficulty": "Hard",
      "sample_input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
      "expected_output": "[3,9,20,null,null,15,7]",
      "function_signature": {
        "python": "def buildTree(preorder, inorder):",
        "javascript": "function buildTree(preorder, inorder) {",
        "java": "public TreeNode buildTree(int[] preorder, int[] inorder) {",
        "c": "struct TreeNode* buildTree(int* preorder, int preSize, int* inorder, int inSize) {",
        "cpp": "TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {"
      }
    },
    {
      "id": "tree9",
      "question": "Find all root-to-leaf paths in a binary tree.",
      "difficulty": "Easy",
      "sample_input": "root = [1,2,3,null,5]",
      "expected_output": "[\"1->2->5\",\"1->3\"]",
      "function_signature": {
        "python": "def binaryTreePaths(root):",
        "javascript": "function binaryTreePaths(root) {",
        "java": "public List<String> binaryTreePaths(TreeNode root) {",
        "c": "char** binaryTreePaths(struct TreeNode* root, int* returnSize) {",
        "cpp": "vector<string> binaryTreePaths(TreeNode* root) {"
      }
    },
    {
      "id": "tree10",
      "question": "Serialize and deserialize a binary tree.",
      "difficulty": "Hard",
      "sample_input": "root = [1,2,3,null,null,4,5]",
      "expected_output": "\"1,2,3,null,null,4,5\"",
      "function_signature": {
        "python": "class Codec:\n    def serialize(self, root):\n    def deserialize(self, data):",
        "javascript": "function serialize(root) {\nfunction deserialize(data) {",
        "java": "public String serialize(TreeNode root) {\npublic TreeNode deserialize(String data) {",
        "c": "char* serialize(struct TreeNode* root) {\nstruct TreeNode* deserialize(char* data) {",
        "cpp": "string serialize(TreeNode* root) {\nTreeNode* deserialize(string data) {"
      }
    },
    {
      "id": "tree11",
      "question": "Find maximum path sum in a binary tree (any node to any node).",
      "difficulty": "Hard",
      "sample_input": "root = [-10,9,20,null,null,15,7]",
      "expected_output": "42",
      "function_signature": {
        "python": "def max_path_sum(root):",
        "javascript": "function maxPathSum(root) {",
        "java": "public int maxPathSum(TreeNode root) {",
        "c": "int maxPathSum(struct TreeNode* root) {",
        "cpp": "int maxPathSum(TreeNode* root) {"
      }
    },
    {
      "id": "tree12",
      "question": "Recover a BST where two nodes are swapped by mistake.",
      "difficulty": "Hard",
      "sample_input": "root = [1,3,null,null,2]",
      "expected_output": "[3,1,null,null,2]",
      "function_signature": {
        "python": "def recover_tree(root):",
        "javascript": "function recoverTree(root) {",
        "java": "public void recoverTree(TreeNode root) {",
        "c": "void recoverTree(struct TreeNode* root) {",
        "cpp": "void recoverTree(TreeNode* root) {"
      }
    },
    {
      "id": "tree13",
      "question": "Count all nodes in a complete binary tree efficiently.",
      "difficulty": "Medium",
      "sample_input": "root = [1,2,3,4,5,6]",
      "expected_output": "6",
      "function_signature": {
        "python": "def count_nodes(root):",
        "javascript": "function countNodes(root) {",
        "java": "public int countNodes(TreeNode root) {",
        "c": "int countNodes(struct TreeNode* root) {",
        "cpp": "int countNodes(TreeNode* root) {"
      }
    },
    {
      "id": "tree14",
      "question": "Find the kth smallest element in a BST.",
      "difficulty": "Medium",
      "sample_input": "root = [3,1,4,null,2], k = 1",
      "expected_output": "1",
      "function_signature": {
        "python": "def kth_smallest(root, k):",
        "javascript": "function kthSmallest(root, k) {",
        "java": "public int kthSmallest(TreeNode root, int k) {",
        "c": "int kthSmallest(struct TreeNode* root, int k) {",
        "cpp": "int kthSmallest(TreeNode* root, int k) {"
      }
    },
    {
      "id": "tree15",
      "question": "Connect next right pointers in each node of a perfect binary tree.",
      "difficulty": "Medium",
      "sample_input": "root = [1,2,3,4,5,6,7]",
      "expected_output": "[1,#,2,3,#,4,5,6,7,#]",
      "function_signature": {
        "python": "def connect(root):",
        "javascript": "function connect(root) {",
        "java": "public Node connect(Node root) {",
        "c": "struct Node* connect(struct Node* root) {",
        "cpp": "Node* connect(Node* root) {"
      }
    }
  ],
  "Heaps": [
    {
      "id": "heap1",
      "question": "Find the k largest elements in an array.",
      "difficulty": "Medium",
      "sample_input": "nums = [3,2,1,5,6,4], k = 2",
      "expected_output": "[5,6]",
      "function_signature": {
        "python": "def k_largest_elements(nums, k):",
        "javascript": "function kLargestElements(nums, k) {",
        "java": "public int[] kLargestElements(int[] nums, int k) {",
        "c": "int* kLargestElements(int* nums, int n, int k) {",
        "cpp": "vector<int> kLargestElements(vector<int>& nums, int k) {"
      }
    },
    {
      "id": "heap2",
      "question": "Implement a min heap and support insertion.",
      "difficulty": "Medium",
      "sample_input": "Insert 5, 3, 8, 1",
      "expected_output": "[1, 3, 8, 5]",
      "function_signature": {
        "python": "def build_min_heap(elements):",
        "javascript": "function buildMinHeap(elements) {",
        "java": "public int[] buildMinHeap(int[] elements) {",
        "c": "void buildMinHeap(int elements[], int n) {",
        "cpp": "vector<int> buildMinHeap(vector<int>& elements) {"
      }
    },
    {
      "id": "heap3",
      "question": "Find the kth smallest element in an array.",
      "difficulty": "Medium",
      "sample_input": "nums = [7,10,4,3,20,15], k = 3",
      "expected_output": "7",
      "function_signature": {
        "python": "def kth_smallest(nums, k):",
        "javascript": "function kthSmallest(nums, k) {",
        "java": "public int kthSmallest(int[] nums, int k) {",
        "c": "int kthSmallest(int* nums, int n, int k) {",
        "cpp": "int kthSmallest(vector<int>& nums, int k) {"
      }
    },
    {
      "id": "heap4",
      "question": "Merge k sorted arrays into one sorted array using a heap.",
      "difficulty": "Hard",
      "sample_input": "[[1,4,7],[2,5,8],[3,6,9]]",
      "expected_output": "[1,2,3,4,5,6,7,8,9]",
      "function_signature": {
        "python": "def merge_k_sorted(arrays):",
        "javascript": "function mergeKSorted(arrays) {",
        "java": "public int[] mergeKSorted(int[][] arrays) {",
        "c": "int* mergeKSorted(int** arrays, int k, int n) {",
        "cpp": "vector<int> mergeKSorted(vector<vector<int>>& arrays) {"
      }
    },
    {
      "id": "heap5",
      "question": "Find the median from a data stream.",
      "difficulty": "Hard",
      "sample_input": "addNum(1), addNum(2), findMedian() \u2192 1.5, addNum(3), findMedian() \u2192 2.0",
      "expected_output": "2.0",
      "function_signature": {
        "python": "class MedianFinder:\n    def __init__(self):\n    def addNum(self, num):\n    def findMedian(self):",
        "javascript": "class MedianFinder {\n  constructor() {}\n  addNum(num) {}\n  findMedian() {}",
        "java": "class MedianFinder {\n  public MedianFinder() {}\n  public void addNum(int num) {}\n  public double findMedian() {}\n}",
        "c": "// Implement MedianFinder using two heaps",
        "cpp": "class MedianFinder {\npublic:\n  MedianFinder() {}\n  void addNum(int num) {}\n  double findMedian() {}\n};"
      }
    },
    {
      "id": "heap6",
      "question": "Sort an almost sorted array where each element is at most k positions away.",
      "difficulty": "Medium",
      "sample_input": "arr = [6,5,3,2,8,10,9], k = 3",
      "expected_output": "[2,3,5,6,8,9,10]",
      "function_signature": {
        "python": "def sort_nearly_sorted(arr, k):",
        "javascript": "function sortNearlySorted(arr, k) {",
        "java": "public int[] sortNearlySorted(int[] arr, int k) {",
        "c": "void sortNearlySorted(int* arr, int n, int k) {",
        "cpp": "vector<int> sortNearlySorted(vector<int>& arr, int k) {"
      }
    },
    {
      "id": "heap7",
      "question": "Find the k closest points to the origin from a list of points.",
      "difficulty": "Medium",
      "sample_input": "points = [[1,3],[-2,2]], k = 1",
      "expected_output": "[[-2,2]]",
      "function_signature": {
        "python": "def k_closest(points, k):",
        "javascript": "function kClosest(points, k) {",
        "java": "public int[][] kClosest(int[][] points, int k) {",
        "c": "int** kClosest(int** points, int n, int k) {",
        "cpp": "vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {"
      }
    },
    {
      "id": "heap8",
      "question": "Implement a max heap with extract-max operation.",
      "difficulty": "Medium",
      "sample_input": "Insert 4,10,3,5,1 then extractMax",
      "expected_output": "10",
      "function_signature": {
        "python": "def extract_max(elements):",
        "javascript": "function extractMax(elements) {",
        "java": "public int extractMax(int[] elements) {",
        "c": "int extractMax(int* elements, int* n) {",
        "cpp": "int extractMax(vector<int>& elements) {"
      }
    },
    {
      "id": "heap9",
      "question": "Find the smallest range that includes at least one number from each of k sorted lists.",
      "difficulty": "Hard",
      "sample_input": "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
      "expected_output": "[20,24]",
      "function_signature": {
        "python": "def smallest_range(nums):",
        "javascript": "function smallestRange(nums) {",
        "java": "public int[] smallestRange(List<List<Integer>> nums) {",
        "c": "int* smallestRange(int** nums, int k, int* sizes) {",
        "cpp": "vector<int> smallestRange(vector<vector<int>>& nums) {"
      }
    },
    {
      "id": "heap10",
      "question": "Reorganize a string so no two adjacent characters are the same using a max heap.",
      "difficulty": "Medium",
      "sample_input": "\"aab\"",
      "expected_output": "\"aba\"",
      "function_signature": {
        "python": "def reorganize_string(s):",
        "javascript": "function reorganizeString(s) {",
        "java": "public String reorganizeString(String s) {",
        "c": "char* reorganizeString(char* s) {",
        "cpp": "string reorganizeString(string s) {"
      }
    },
    {
      "id": "heap11",
      "question": "Find the kth largest element in a stream of numbers.",
      "difficulty": "Hard",
      "sample_input": "k=3, nums=[4,5,8,2], then add 3,5,10,9,4",
      "expected_output": "[4,5,5,8,8]",
      "function_signature": {
        "python": "class KthLargest:\n    def __init__(self, k, nums):\n    def add(self, val):",
        "javascript": "class KthLargest {\n  constructor(k, nums) {}\n  add(val) {}",
        "java": "class KthLargest {\n  public KthLargest(int k, int[] nums) {}\n  public int add(int val) {}",
        "c": "// Implement KthLargest",
        "cpp": "class KthLargest {\npublic:\n  KthLargest(int k, vector<int>& nums) {}\n  int add(int val) {}\n};"
      }
    },
    {
      "id": "heap12",
      "question": "Find minimum cost to connect n ropes (sum of all merge costs).",
      "difficulty": "Hard",
      "sample_input": "[4,3,2,6]",
      "expected_output": "29",
      "function_signature": {
        "python": "def min_cost_ropes(ropes):",
        "javascript": "function minCostRopes(ropes) {",
        "java": "public int minCostRopes(int[] ropes) {",
        "c": "int minCostRopes(int* ropes, int n) {",
        "cpp": "int minCostRopes(vector<int>& ropes) {"
      }
    },
    {
      "id": "heap13",
      "question": "Find minimum intervals to cover all given query points.",
      "difficulty": "Medium",
      "sample_input": "intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]",
      "expected_output": "[3,3,1,4]",
      "function_signature": {
        "python": "def min_interval(intervals, queries):",
        "javascript": "function minInterval(intervals, queries) {",
        "java": "public int[] minInterval(int[][] intervals, int[] queries) {",
        "c": "int* minInterval(int** intervals, int n, int* queries, int q) {",
        "cpp": "vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {"
      }
    },
    {
      "id": "heap14",
      "question": "Task scheduler: minimum time to execute tasks with cooldown n.",
      "difficulty": "Medium",
      "sample_input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
      "expected_output": "8",
      "function_signature": {
        "python": "def least_interval(tasks, n):",
        "javascript": "function leastInterval(tasks, n) {",
        "java": "public int leastInterval(char[] tasks, int n) {",
        "c": "int leastInterval(char* tasks, int n, int cooldown) {",
        "cpp": "int leastInterval(vector<char>& tasks, int n) {"
      }
    },
    {
      "id": "heap15",
      "question": "Find the running median after each insertion from an array.",
      "difficulty": "Medium",
      "sample_input": "[5,15,1,3,2,8]",
      "expected_output": "[5.0,10.0,5.0,4.0,3.0,4.0]",
      "function_signature": {
        "python": "def running_median(nums):",
        "javascript": "function runningMedian(nums) {",
        "java": "public double[] runningMedian(int[] nums) {",
        "c": "double* runningMedian(int* nums, int n) {",
        "cpp": "vector<double> runningMedian(vector<int>& nums) {"
      }
    }
  ]
};
