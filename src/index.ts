export interface TreeNode {
  name: string;
  children: TreeNode[]
}

function createNode(path: string[], tree: TreeNode[]) : void {
  const name = path.shift();
  const idx = tree.findIndex((e: TreeNode) => {
    return e.name == name;
  });
  if(idx < 0){
    tree.push({
      name: name,
      children: []
    });
    if(path.length !== 0) {
      createNode(path, tree[tree.length -1].children)
    }
  } else if(path.length !== 0) {
    createNode(path, tree[idx].children)
  }
}

export default function parse(data: string[]) : TreeNode[] {
  const tree : TreeNode[] = [];
  for(let i = 0; i < data.length; i++){
    const path : string = data[i];
    const split : string[] = path.split('/');
    createNode(split, tree);
  }
  return tree;
}
