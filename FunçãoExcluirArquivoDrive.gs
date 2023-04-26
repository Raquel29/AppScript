// excluir arquivo txt da pasta de origem
function excluirArquivo(){
  var folderId = "id da pasta onde está o aquivo que sera excluido";
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByType("text/plain"); //define um arquivo do tipo texto
  while (files.hasNext()) {
    var file = files.next();
    var id = file.getId();
    DriveApp.getFileById(id).setTrashed(true);
  }
