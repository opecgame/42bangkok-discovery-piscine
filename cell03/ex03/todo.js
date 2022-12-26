function setcock(tsID , cvalue){
    document.cookie = tsID + '=' + cvalue ;
    var date = new Date() ; 
    date.setMonth(date.getYear() + 3000);
    document.cookie += ('; expires=' + date.toUTCString());
}

function dlist(tsID){
    var date = new Date() ; 
    date.setMonth(date.getYear() - 1);
    document.cookie = tsID + '=; expires='+ date.toUTCString() +';';
}

function addtask(){
    var data = prompt("กรุณากรอกข้อมูล")
    let id = Date.now();
    if (data != '' && data != null){
        addList(data,id);
        setcock(id,data);
    }
}

function addList(value, id){
    var list = document.getElementById('ft_list');
    var texts = document.createTextNode(value);
    var div = document.createElement('div');
    div.appendChild(texts); div.id = id ;
    if (value === '' || !id) alert('กรุณากรอกข้อมูล');
    else{
        list.prepend(div);
    }
    div.onclick = function(e){
        if(confirm(`Sure to delete ${this.id}`)){
            dlist(this.id);
            this.remove();   
        }   
    }   
    
}

function checklist(){
    let data = document.cookie.split(";");
    if (!(data[0] == '' && data.length === 1)){
        for(let i = 0 ; i < data.length ; i++){
            let partofcock = data[i].split("=") ;
            addList(partofcock[1] , partofcock[0]);
        }
    }
}