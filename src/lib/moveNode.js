/*
  Moves a node to a new parent by changed the parentId
  Mutable
*/
function moveNode(draggingNode, dropzoneNode) {
  draggingNode.parentId = dropzoneNode.id;
}

export default moveNode;
