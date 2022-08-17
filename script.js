
		function schanger() {
			document.getElementById("sform").style.display = 'none'
			document.getElementById("lform").style.display = 'block'
			
		}
		function lchanger() {
			document.getElementById("lform").style.display = 'none'
			document.getElementById("sform").style.display = 'block'
	
	}
	
	
	
	
			function signup() {
				let fname = document.getElementById('fname').value;
				// fname.totitlecase();
				let lname = document.getElementById('lname').value;
				// lname.totitlecase();
				let email = document.getElementById('email').value;
				// email.tolowercase();
				let pword = document.getElementById('pword').value;
				let cpword = document.getElementById('cpword').value;
	
				if (pword !== cpword) {
					document.getElementById("msg").innerHTML = `
					<div class="alert alert-warning alert-dismissible fade show" role="alert">
						Password Is Not Equal To Confrim Password....!
						<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>`
						;
					return;
				}
				let myuser = {
				   firstName : fname,
				   lastName : lname,
				   email : email ,
				   password : pword
	
			   }
				axios.post('https://node-rest-account.herokuapp.com/signup',myuser)
				
				.then(function (response) {
						console.log(response.data);
						let msg = response.data.message;
						document.getElementById("msg").innerHTML = `
						<div class="alert alert-success bg-opacity-75 alert-dismissible fade show" role="alert">
							${msg}
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						`
					})
					.catch(function (error) {
						
						// console.log(error.response.data);
						document.getElementById("msg").innerHTML =`
						<div class="alert alert-danger bg-opacity-75 alert-dismissible fade show" role="alert">
							${error.response.data.message}
						<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
						`
					});
	
					document.getElementById("sform").style.display = 'none'
					document.getElementById("lform").style.display = 'block'	
			}
	
	
	
	
	
			function login() {
				let lemail = document.getElementById('lemail').value;
				let lpword = document.getElementById('lpword').value;
	
				let luser = {
				   email : lemail ,
				   password : lpword
	
			   }
				axios.post('https://node-rest-account.herokuapp.com/signin',luser)
				
				.then(function (response) {
						console.log(response.data);
						let msg = response.data.message;
						document.getElementById("msg").innerHTML = `
						<div class="alert alert-success bg-opacity-75 alert-dismissible fade show" role="alert">
							${msg}
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						`
					})
					.catch(function (error) {
						
						// console.log(error.response.data);
						document.getElementById("msg").innerHTML =`
						<div class="alert alert-danger bg-opacity-75 alert-dismissible fade show" role="alert">
							${error.response.data.message}
						<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
						`
					});
			}