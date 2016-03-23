function create_gibberish(length){
			var word = [];
			letters = 'abcdefghijklmnopqrstuvwxyz';
			for(i=0;i<length;i++){
				
				word[i] = letters[Math.floor(Math.random()*25.9)];
			}	
			return word.join('');
}

function create_word(){

	set = ['Apple','Cat','Beer','Gmail','Earphones','Bag','Press','Basketball','Football','Liverpool','College','Shirt','Lock','Android','Charger','Blackberry','Generate','Hockey','India','Japan','Kilogram','Orange','Ostrich','Pikachu','Raichu','Xerox','Quebex','Queens','Skyrim','Tape','Unicorn','Yankee','Zulu','Vixen','Uniform','Bottle','Cream','Iron','Talc','Light','Deo','Vaseline','Kettle','Book','Sweatshirt','Bournvita','Oil','Mobile','Snapchat','Twitter','Pen','Shampoo','Electronics','World Cup','Jeans','Notes','Wire','Bucket','Socket','Angular','React','Node','Paper','Dunder Mifflin','Food','Chicken','Naan','Kingfisher','Economics','Shorts',]
	return(set[Math.floor(Math.random()*(set.length+0.5))]);
}