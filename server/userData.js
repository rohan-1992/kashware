const bcrypt = require('bcrypt');


exports.users = [{"username":"kashware","password":"$2b$10$HpSAYpHZP0jsylPdFe6QTO76WjtVfRvxBDWtV4ih.svuEDhseBzsu"}];

// try{
// 	let username = "kashware";
// 	let password = "round1"
// 	bcrypt.hash(password,10,(err,hashedPassword)=>{
// 		users.push({
// 			username,
// 			password : hashedPassword,
// 		});
// 	});
// }catch(err){
// 	console.log(err);
// }

