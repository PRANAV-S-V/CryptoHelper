$(document).ready(function() {
    $('.coin-select').on('change', function() {
        const selectedValue = $(this).val();
        
        fetch('/coin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ selectedValue }),
        })
        .then(response => response.json())
        .then(data => {
            $('h1').html(data); 
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
