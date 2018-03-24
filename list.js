

function CarregarDados(){
    var content = `<tbody>`;
    var url = "http://localhost:3000/aulareforco";
    $.get(url,function(data){
        console.log(data);
        for(var i=0;i<data.length;i++){
            content += ` <tr>
                        <th scope="row">`+data[i].id+`</th>
                        <td>`+data[i].author+`</td>
                        <td>`+data[i].book+`</td>
                        <td>`+data[i].comment+`</td>
                        </tr>`; 
            }
    content += '</tbody>';
        $(".table").append(content);
    });
    



}