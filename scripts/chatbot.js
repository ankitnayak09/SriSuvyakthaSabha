// ChatBot Animation
const chatbotLabel = document.querySelector('.chatbot label');

chatbotLabel.addEventListener('click', () => {
	if(chatbotLabel.classList.contains('nav-logo-on')) {
		chatbotLabel.classList.add('nav-logo-off'); 
		chatbotLabel.classList.remove('nav-logo-on'); 
	}
	else {
		chatbotLabel.classList.add('nav-logo-on');
		chatbotLabel.classList.remove('nav-logo-off');
	}
})