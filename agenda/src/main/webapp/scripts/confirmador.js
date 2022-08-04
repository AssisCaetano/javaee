/**
 * Confirmação de exclusão de um contato
 *@autor francisco de assis
 *@param idcon
 */

function confirmar(idcon) {

	let resposta = confirm("Confirma a Exclusão deste Contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}