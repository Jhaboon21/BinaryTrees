/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    // helper function to perform recurse for gathering sum
    function sumHelper(node) {
      // go through all the children in the node
      for (let child of node.children) {
        total += child.val;

        // recurse until no children are left
        if (child.children.length > 0) sumHelper(child);
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    // if val is even, then count starts as 1, otherwise it's 0
    let count = this.root.val % 2 === 0 ? 1 : 0;

    // helper function to perform recurse for counting even
    function countEvensHelper(node) {
      // go through all the children in the node
      for (let child of node.children) {
        // if child is even, add to count
        if (child.val % 2 === 0) count++;

        // recurse until no children are left
        if (child.children.length > 0) countEvensHelper(child);
      }
    }

    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    // if val is greater than the lowerbound, start at 1
    let count = this.root.val > lowerBound ? 1 : 0;

    // helper function to perform recuse for counting vals greater than lowerbound
    function numsGreaterHelper(node) {
      // go through all children
      for (let child of node.children) {
        // add to count if child is greater than lowerbound
        if (child.val > lowerBound) count++;

        // recurse until no children are left
        if (child.children.length > 0) numsGreaterHelper(child);
      }
    }

    numsGreaterHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
