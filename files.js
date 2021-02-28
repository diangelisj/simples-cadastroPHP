			var qnt_result_pg = 50; //quantidade de registro por página
			var pagina = 1; //página inicial
			$(document).ready(function () {
				listar_usuario(pagina, qnt_result_pg); //Chamar a função para listar os registros
			});
			
			function listar_usuario(pagina, qnt_result_pg){
				var dados = {
					pagina: pagina,
					qnt_result_pg: qnt_result_pg
				}
				$.post('listar_usuario.php', dados , function(retorna){
					//Subtitui o valor no seletor id="conteudo"
					$("#conteudo").html(retorna);
				});
			}
			
			$(document).ready(function(){
				$(document).on('click','.view_data', function(){
					var user_id = $(this).attr("id");
					//alert(user_id);
					//Verificar se há valor na variável "user_id".
					if(user_id !== ''){
						var dados = {
							user_id: user_id
						};
						$.post('visualizar.php', dados, function(retorna){
							//Carregar o conteúdo para o usuário
							$("#visul_usuario").html(retorna);
							$('#visulUsuarioModal').modal('show'); 
						});
					}
				});
				
				$('#insert_form').on('submit', function(event){
					event.preventDefault();
					//Receber os dados do formulário
					var dados = $("#insert_form").serialize();
					$.post("cadastrar.php", dados, function (retorna){
						if(retorna){
							//Alerta de cadastro realizado com sucesso
							$("#msg").html('<div class="alert alert-success" role="alert">Usuário cadastrado com sucesso!</div>');
							
							//Limpar os campo
							$('#insert_form')[0].reset();
							
							//Fechar a janela modal cadastrar
							$('#addUsuarioModal').modal('hide');
							
							listar_usuario(1, 50);
						}else{
							
						}
						
					});
				});
			});
		