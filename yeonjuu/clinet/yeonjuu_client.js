class Chat{
    init() {
        document
            .querySelector('#submit_y')
            .addEventListener('click',this.text_y.bind(this));
        document
            .querySelector('#submit_s')
            .addEventListener('click',this.text_s.bind(this));
        document
            .querySelector('#submit_w')
            .addEventListener('click',this.text_w.bind(this));
        document
            .querySelector('#submit_h')
            .addEventListener('click',this.text_h.bind(this));
    }
    post(path,body){
        fetch(`http://localhost:5000/${path}`,{
            method : 'POST',
            body : JSON.stringify(body),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res =>{
            this.render(res);
        });
    }
    text_y(){
        const text = document.querySelector('#text_y').value;
        const name = '연주';
        this.post('y',name,text);
    }
    text_s(){
        const text = document.querySelector('#text_s').value;
        const name = '순환';
        this.post('s',name,text);
    }
    text_w(){
        const text = document.querySelector('#text_w').value;
        const name = '재원';
        this.post('w',name,text);
    }
    text_h(){
        const text = document.querySelector('#text_h').value;
        const name = '정환';
        this.post('h',name,text);
    }
    render(name,text){
        const  e_name = document.querySelector('#response-name');
        const  e_text = document.querySelector('#response-text');
        document.querySelector('#text_y').value = '';
        document.querySelector('#text_s').value = '';
        document.querySelector('#text_w').value = '';
        document.querySelector('#text_h').value = '';
        e_name.textContent = name;
        e_text.textContent = text;
    }
}
const chat = new Chat();
chat.init();


