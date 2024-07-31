document.getElementById('procrastination-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Respostas enviadas com sucesso!');
            this.reset();
        } else {
            alert('Houve um problema ao enviar suas respostas. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
