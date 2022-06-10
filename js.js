const interval =  setInterval(() => {
    console.log('test')
    if(document.getElementById('setVerifiedStatusToplayer') && document.getElementById('btn_status_change_no')){
        document.getElementById('btn_status_change_no').click()
        window.location.href = 'https://zooart.com.pl/panel/order-verification.php'
    }
}, 200);
