function Tree(x, l, r) {
    this.x = x;
    this.l = l;
    this.r = r;
}

function buildTree(tuple) {
    if (!tuple || tuple === 'None') return null;
    if (typeof tuple === 'number') return new Tree(tuple, null, null);
    
    const [val, left, right] = tuple;
    return new Tree(val, buildTree(left), buildTree(right));
}

function solution(T) {
    if (Array.isArray(T)) {
        T = buildTree(T);
    }
    
    let maxTurns = 0;
    
    function zigzag(node, goLeft, turns) {
        if (!node) return;
        
        maxTurns = Math.max(maxTurns, turns);
        
        if (goLeft) {
            zigzag(node.r, false, turns + 1);
            zigzag(node.l, true, 0);
        } else {
            zigzag(node.l, true, turns + 1);
            zigzag(node.r, false, 0);
        }
    }
    
    if (!T) return 0;
    
    zigzag(T.l, true, 0);
    zigzag(T.r, false, 0);
    
    return maxTurns;
}