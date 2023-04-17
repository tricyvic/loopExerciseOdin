let output = document.querySelector('.output');
output.innerHTML = '';

for(let i=10;i>=0;i--){
	 if(i===10){
		const para = document.createElement('p');
 	 	para.textContent = `countdown 10`;
 	 	output.appendChild(para);
		}
	  else if(i === 0){
		const para = document.createElement('p');
 	 	para.textContent = `blast off!`;
 	 	output.appendChild(para);
		}
	   else{
		const para = document.createElement('p');
 	 	para.textContent = `${i}`;
 	 	output.appendChild(para);
		}
	}
