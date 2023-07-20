function ocultar_servico() {
    var selectElement = document.getElementById("veiculo");
    var selectedOption = selectElement.value;

 
    var kg = document.getElementById("kg");
    var litro = document.getElementById("litro");
    var lugar = document.getElementById("lugar");



    if (selectedOption === "caminhonete") {
      document.getElementById("frete").checked = true;
      document.getElementById("mudanca").checked = false;
      document.getElementById("viagem").checked = false; 
      litro.style.display = "block";
      kg.style.display = "none";
      lugar.style.display = "none";

    }else if(selectedOption === "caminhao") {
      document.getElementById("mudanca").checked = true;  
      document.getElementById("frete").checked = false;
      document.getElementById("viagem").checked = false; 
      kg.style.display = "block";
      litro.style.display = "none";
      lugar.style.display = "none";
  }else{
    document.getElementById("viagem").checked = true;
    document.getElementById("frete").checked = false;
    document.getElementById("mudanca").checked = false;
    lugar.style.display = "block";
    kg.style.display = "none";
    litro.style.display = "none";
  }

    

  }

  