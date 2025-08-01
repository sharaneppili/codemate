
const questions = {
    "Easy": [
        {
            title: "Two Sum",
            description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
            templates: {
                python: `class Solution:\n    def twoSum(self, nums, target):\n        # Your code here`,
                java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[2, 7, 11, 15], 9], expected: [0, 1] }, { input: [[3, 2, 4], 6], expected: [1, 2] }]
        },
        {
            title: "Reverse a String",
            description: "Write a function that reverses a string. The input string is given as an array of characters.",
            templates: {
                python: `class Solution:\n    def reverseString(self, s):\n        # Your code here`,
                java: `class Solution {\n    public void reverseString(char[] s) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"] }, { input: [["H","a","n","n","a","h"]], expected: ["h","a","n","n","a","H"] }]
        },
        {
            title: "Palindrome Number",
            description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
            templates: {
                python: `class Solution:\n    def isPalindrome(self, x):\n        # Your code here`,
                java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [121], expected: true }, { input: [-121], expected: false }]
        },
        {
            title: "Find the Index of the First Occurrence in a String",
            description: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            templates: {
                python: `class Solution:\n    def strStr(self, haystack, needle):\n        # Your code here`,
                java: `class Solution {\n    public int strStr(String haystack, String needle) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["sadbutsad", "sad"], expected: 0 }, { input: ["leetcode", "leeto"], expected: -1 }]
        },
        {
            title: "Valid Anagram",
            description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            templates: {
                python: `class Solution:\n    def isAnagram(self, s, t):\n        # Your code here`,
                java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["anagram", "nagaram"], expected: true }, { input: ["rat", "car"], expected: false }]
        },
        {
            title: "Merge Two Sorted Lists",
            description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
            templates: {
                python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeTwoLists(self, list1, list2):\n        # Your code here`,
                java: `/**\n * Definition for singly-linked list.\n * public class ListNode {\n * int val;\n * ListNode next;\n * ListNode() {}\n * ListNode(int val) { this.val = val; }\n * ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Your code here\n    }\n}`,
                cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n * int val;\n * ListNode *next;\n * ListNode() : val(0), next(nullptr) {}\n * ListNode(int x) : val(x), next(nullptr) {}\n * ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] }, { input: [[], []], expected: [] }]
        },
        {
            title: "Contains Duplicate",
            description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            templates: {
                python: `class Solution:\n    def containsDuplicate(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,2,3,1]], expected: true }, { input: [[1,2,3,4]], expected: false }]
        },
        {
            title: "Maximum Depth of Binary Tree",
            description: "Given the root of a binary tree, return its maximum depth.",
            templates: {
                python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root):\n        # Your code here`,
                java: `/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        // Your code here\n    }\n}`,
                cpp: `/**\n * Definition for a binary tree node.\n * struct TreeNode {\n * int val;\n * TreeNode *left;\n * TreeNode *right;\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,9,20,null,null,15,7]], expected: 3 }, { input: [[1,null,2]], expected: 2 }]
        },
        {
            title: "Valid Parentheses",
            description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            templates: {
                python: `class Solution:\n    def isValid(self, s):\n        # Your code here`,
                java: `class Solution {\n    public boolean isValid(String s) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["()"], expected: true }, { input: ["(]"], expected: false }, { input: ["([)]"], expected: false }]
        },
        {
            title: "Best Time to Buy and Sell Stock",
            description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
            templates: {
                python: `class Solution:\n    def maxProfit(self, prices):\n        # Your code here`,
                java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[7,1,5,3,6,4]], expected: 5 }, { input: [[7,6,4,3,1]], expected: 0 }]
        },
        {
            title: "Binary Search",
            description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
            templates: {
                python: `class Solution:\n    def search(self, nums, target):\n        # Your code here`,
                java: `class Solution {\n    public int search(int[] nums, int target) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[-1,0,3,5,9,12], 9], expected: 4 }, { input: [[-1,0,3,5,9,12], 2], expected: -1 }]
        },
        {
            title: "Majority Element",
            description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
            templates: {
                python: `class Solution:\n    def majorityElement(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int majorityElement(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,2,3]], expected: 3 }, { input: [[2,2,1,1,1,2,2]], expected: 2 }]
        },
        {
            title: "Move Zeroes",
            description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
            templates: {
                python: `class Solution:\n    def moveZeroes(self, nums):\n        # Do not return anything, modify nums in-place instead.`,
                java: `class Solution {\n    public void moveZeroes(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[0,1,0,3,12]], expected: [1,3,12,0,0] }, { input: [[0]], expected: [0] }]
        },
        {
            title: "Missing Number",
            description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
            templates: {
                python: `class Solution:\n    def missingNumber(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int missingNumber(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,0,1]], expected: 2 }, { input: [[9,6,4,2,3,5,7,0,1]], expected: 8 }]
        },
        {
            title: "Climbing Stairs",
            description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            templates: {
                python: `class Solution:\n    def climbStairs(self, n):\n        # Your code here`,
                java: `class Solution {\n    public int climbStairs(int n) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [2], expected: 2 }, { input: [3], expected: 3 }]
        }
    ],
    "Medium": [
        {
            title: "Longest Substring Without Repeating Characters",
            description: "Given a string `s`, find the length of the longest substring without repeating characters.",
            templates: {
                python: `class Solution:\n    def lengthOfLongestSubstring(self, s):\n        # Your code here`,
                java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["abcabcbb"], expected: 3 }, { input: ["bbbbb"], expected: 1 }]
        },
        {
            title: "3Sum",
            description: "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.",
            templates: {
                python: `class Solution:\n    def threeSum(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[-1,0,1,2,-1,-4]], expected: [[-1,-1,2],[-1,0,1]] }, { input: [[0,1,1]], expected: [] }]
        },
        {
            title: "Product of Array Except Self",
            description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            templates: {
                python: `class Solution:\n    def productExceptSelf(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,2,3,4]], expected: [24,12,8,6] }, { input: [[-1,1,0,-3,3]], expected: [0,0,9,0,0] }]
        },
        {
            title: "Container With Most Water",
            description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
            templates: {
                python: `class Solution:\n    def maxArea(self, height):\n        # Your code here`,
                java: `class Solution {\n    public int maxArea(int[] height) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,8,6,2,5,4,8,3,7]], expected: 49 }, { input: [[1,1]], expected: 1 }]
        },
        {
            title: "Top K Frequent Elements",
            description: "Given an integer array nums and an integer k, return the k most frequent elements.",
            templates: {
                python: `class Solution:\n    def topKFrequent(self, nums, k):\n        # Your code here`,
                java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,1,1,2,2,3], 2], expected: [1,2] }, { input: [[1], 1], expected: [1] }]
        },
        {
            title: "Validate Binary Search Tree",
            description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
            templates: {
                python: `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isValidBST(self, root):\n        # Your code here`,
                java: `class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[2,1,3]], expected: true }, { input: [[5,1,4,null,null,3,6]], expected: false }]
        },
        {
            title: "Kth Smallest Element in a BST",
            description: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
            templates: {
                python: `class Solution:\n    def kthSmallest(self, root, k):\n        # Your code here`,
                java: `class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,1,4,null,2], 1], expected: 1 }, { input: [[5,3,6,2,4,null,null,1], 3], expected: 3 }]
        },
        {
            title: "Coin Change",
            description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
            templates: {
                python: `class Solution:\n    def coinChange(self, coins, amount):\n        # Your code here`,
                java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,2,5], 11], expected: 3 }, { input: [[2], 3], expected: -1 }]
        },
        {
            title: "Number of Islands",
            description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
            templates: {
                python: `class Solution:\n    def numIslands(self, grid):\n        # Your code here`,
                java: `class Solution {\n    public int numIslands(char[][] grid) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected: 1 }, { input: [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected: 3 }]
        },
        {
            title: "Rotate Image",
            description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
            templates: {
                python: `class Solution:\n    def rotate(self, matrix):\n        # Do not return anything, modify matrix in-place instead.`,
                java: `class Solution {\n    public void rotate(int[][] matrix) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[7,4,1],[8,5,2],[9,6,3]] }]
        },
        {
            title: "Group Anagrams",
            description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            templates: {
                python: `class Solution:\n    def groupAnagrams(self, strs):\n        # Your code here`,
                java: `class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [["eat","tea","tan","ate","nat","bat"]], expected: [["bat"],["nat","tan"],["ate","eat","tea"]] }]
        },
        {
            title: "Course Schedule",
            description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
            templates: {
                python: `class Solution:\n    def canFinish(self, numCourses, prerequisites):\n        # Your code here`,
                java: `class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [2, [[1,0]]], expected: true }, { input: [2, [[1,0],[0,1]]], expected: false }]
        },
        {
            title: "Find Minimum in Rotated Sorted Array",
            description: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums, return the minimum element of this array.",
            templates: {
                python: `class Solution:\n    def findMin(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int findMin(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,4,5,1,2]], expected: 1 }, { input: [[4,5,6,7,0,1,2]], expected: 0 }]
        },
        {
            title: "Longest Increasing Subsequence",
            description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
            templates: {
                python: `class Solution:\n    def lengthOfLIS(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[10,9,2,5,3,7,101,18]], expected: 4 }, { input: [[0,1,0,3,2,3]], expected: 4 }]
        },
        {
            title: "Word Break",
            description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
            templates: {
                python: `class Solution:\n    def wordBreak(self, s, wordDict):\n        # Your code here`,
                java: `class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["leetcode", ["leet","code"]], expected: true }, { input: ["applepenapple", ["apple","pen"]], expected: true }]
        }
    ],
    "Hard": [
        {
            title: "Trapping Rain Water",
            description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            templates: {
                python: `class Solution:\n    def trap(self, height):\n        # Your code here`,
                java: `class Solution {\n    public int trap(int[] height) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[0,1,0,2,1,0,1,3,2,1,2,1]], expected: 6 }, { input: [[4,2,0,3,2,5]], expected: 9 }]
        },
        {
            title: "Median of Two Sorted Arrays",
            description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
            templates: {
                python: `class Solution:\n    def findMedianSortedArrays(self, nums1, nums2):\n        # Your code here`,
                java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,3], [2]], expected: 2.0 }, { input: [[1,2], [3,4]], expected: 2.5 }]
        },
        {
            title: "Regular Expression Matching",
            description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
            templates: {
                python: `class Solution:\n    def isMatch(self, s, p):\n        # Your code here`,
                java: `class Solution {\n    public boolean isMatch(String s, String p) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["aa", "a"], expected: false }, { input: ["aa", "a*"], expected: true }, { input: ["ab", ".*"], expected: true }]
        },
        {
            title: "Merge k Sorted Lists",
            description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
            templates: {
                python: `class Solution:\n    def mergeKLists(self, lists):\n        # Your code here`,
                java: `class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[[1,4,5],[1,3,4],[2,6]]], expected: [1,1,2,3,4,4,5,6] }]
        },
        {
            title: "Largest Rectangle in Histogram",
            description: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
            templates: {
                python: `class Solution:\n    def largestRectangleArea(self, heights):\n        # Your code here`,
                java: `class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[2,1,5,6,2,3]], expected: 10 }]
        },
        {
            title: "Word Search II",
            description: "Given an m x n board of characters and a list of strings words, return all words on the board.",
            templates: {
                python: `class Solution:\n    def findWords(self, board, words):\n        # Your code here`,
                java: `class Solution {\n    public List<String> findWords(char[][] board, String[] words) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]], expected: ["eat","oath"] }]
        },
        {
            title: "Minimum Window Substring",
            description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
            templates: {
                python: `class Solution:\n    def minWindow(self, s, t):\n        # Your code here`,
                java: `class Solution {\n    public String minWindow(String s, String t) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    string minWindow(string s, string t) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["ADOBECODEBANC", "ABC"], expected: "BANC" }, { input: ["a", "aa"], expected: "" }]
        },
        {
            title: "Serialize and Deserialize Binary Tree",
            description: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.",
            templates: {
                python: `class Codec:\n\n    def serialize(self, root):\n        # Your code here\n\n    def deserialize(self, data):\n        # Your code here`,
                java: `public class Codec {\n\n    // Encodes a tree to a single string.\n    public String serialize(TreeNode root) {\n        \n    }\n\n    // Decodes your encoded data to tree.\n    public TreeNode deserialize(String data) {\n        \n    }\n}`,
                cpp: `class Codec {\npublic:\n\n    // Encodes a tree to a single string.\n    string serialize(TreeNode* root) {\n        \n    }\n\n    // Decodes your encoded data to tree.\n    TreeNode* deserialize(string data) {\n        \n    }\n};`
            },
            testCases: [{ input: [[1,2,3,null,null,4,5]], expected: [1,2,3,null,null,4,5] }]
        },
        {
            title: "Burst Balloons",
            description: "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.",
            templates: {
                python: `class Solution:\n    def maxCoins(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int maxCoins(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int maxCoins(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[3,1,5,8]], expected: 167 }]
        },
        {
            title: "Sliding Window Maximum",
            description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
            templates: {
                python: `class Solution:\n    def maxSlidingWindow(self, nums, k):\n        # Your code here`,
                java: `class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,3,-1,-3,5,3,6,7], 3], expected: [3,3,5,5,6,7] }]
        },
        {
            title: "Longest Consecutive Sequence",
            description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
            templates: {
                python: `class Solution:\n    def longestConsecutive(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[100,4,200,1,3,2]], expected: 4 }, { input: [[0,3,7,2,5,8,4,6,0,1]], expected: 9 }]
        },
        {
            title: "Binary Tree Maximum Path Sum",
            description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
            templates: {
                python: `class Solution:\n    def maxPathSum(self, root):\n        # Your code here`,
                java: `class Solution {\n    public int maxPathSum(TreeNode root) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,2,3]], expected: 6 }, { input: [[-10,9,20,null,null,15,7]], expected: 42 }]
        },
        {
            title: "Find the Duplicate Number",
            description: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space.",
            templates: {
                python: `class Solution:\n    def findDuplicate(self, nums):\n        # Your code here`,
                java: `class Solution {\n    public int findDuplicate(int[] nums) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [[1,3,4,2,2]], expected: 2 }, { input: [[3,1,3,4,2]], expected: 3 }]
        },
        {
            title: "Word Ladder",
            description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter. Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
            templates: {
                python: `class Solution:\n    def ladderLength(self, beginWord, endWord, wordList):\n        # Your code here`,
                java: `class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: ["hit", "cog", ["hot","dot","dog","lot","log","cog"]], expected: 5 }]
        },
        {
            title: "N-Queens",
            description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.",
            templates: {
                python: `class Solution:\n    def solveNQueens(self, n):\n        # Your code here`,
                java: `class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Your code here\n    }\n}`,
                cpp: `class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        // Your code here\n    }\n};`
            },
            testCases: [{ input: [4], expected: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] }]
        }
    ]
};
