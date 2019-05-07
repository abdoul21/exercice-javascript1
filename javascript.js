var sport = prompt("veut tu adopter un animal");

if (sport === "oui" ){
    
    sport = prompt("entre un chien ,un oiseaux et un chat tu prenle quel?");
    if(sport === "un chien"){
        sport = prompt("est tu alergique aux poil de chien");
        if(sport === "oui"){
            sport = alert( "tu n'aurat pas de chien");
        }else if(sport === "non"){
            sport = alert("tu peut avoir un chien")     }
    }else if(sport === "un oiseaux"){
        sport = prompt("est tu alergique aux plume");
        if( sport === "oui"){
            sport = alert("tu n'aura pas de oiseaux");
        }else if(sport ==="non"){
            sport = alert("tu aura un oiseaux");
        }
    }else if(sport === "chat"){
        sport = prompt("est tu alergique aux poil de chat");
        if(sport==="oui"){
            sport = alert("tu n'aura pas de chat");
        }else if(sport ==="non"){
            sport = alert("tu aura un chat");
        }
    }
     
} else{  

}