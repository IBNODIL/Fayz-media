let elToggle = document.getElementById('toggle');
let elToggleCircle = document.getElementById('toggle-circle');
let isChecked = false;

elToggle.addEventListener('click', function(){
  if(isChecked){
    isChecked = false; 
    elToggleCircle.classList.remove('toggle-circle-animation');
  } else{
    isChecked = true; 
    elToggleCircle.classList.add('toggle-circle-animation');
    document.querySelector('.nav-logo-text h1').textContent='Fayz-media';
    document.querySelector('.nav-logo-text h4').textContent='GROUP';
    document.getElementById('nav-link-a-1').textContent = 'Asosiy';
    document.getElementById('nav-link-a-2').textContent = 'Xizmatlar';
    document.getElementById('nav-link-a-3').textContent = 'Biz xaqimizda';
    document.getElementById('nav-link-a-4').textContent = `Qo'shimcha xizmatlar`;
    document.querySelector('.home-text h2').textContent = 'Fayz Media Group';
    document.querySelector('.home-text h3').textContent = 'Fayzli xonadoningiz mehmoni';
    document.querySelector('.home p').textContent = `Fayz-media videostudiyasi to'y va tantanalaringizni eng yuqori sifatda tasvirga olib unutilmas onlaringizni yanada yorqin va go'zal bo'lishini ta'minlaydi. Eng zamonaviy uskunlar, xalqaro darjadagi sifat mahsulotlarimiz sizga manzo'r bo'ladi. Hozir qo'ng'iroq qiling va 15 yillik to'yimiz sabab maxsus chegirmaga ega bo'ling.`;
    document.querySelector('#h-btn-1').textContent = `Biz bilan bog'laning`;
    document.querySelector('#h-btn-2').textContent = `Bizni YouTube da ko'ring`;
    document.getElementById('experiense-in-home').textContent = `15 yillik tajrib`;
    document.querySelector('#service-1').classList.add('service1');
    document.querySelector('#service-2').classList.add('service2');
    document.querySelector('#service-3').classList.add('service3');
    document.querySelector('#service-4').classList.add('service4');
    document.querySelector('h3.ab-us-text').textContent='Studiyamiz xaqida';
    document.querySelector('p.ab-us-text').textContent=`Bizning studiyamiz Qo'qonda - video montaj va video olish studiyasi, yaxshi video tarmoq tayyorlashni taklif etadi. Bizning professionallarimiz kliplar, ijtimoiy tarmoqlar uchun reklama, imidj filmlari, internet dukonlari uchun video reklamalari, qisqa metrajli filmlar tayorlashadi. Bundan tashqari, biz onlayn translyasiyalarni tashkil etamiz va shaxsiy va korporativ tadbirlar uchun video operator xizmatlarini taklif etamiz.`;
    document.getElementById('ab-us-com-text-1').textContent = 'Video montaj';
    document.getElementById('ab-us-com-text-2').textContent = 'Xar qanday qiyinligdagi';
    document.getElementById('ab-us-com-text-3').textContent = 'Taniqlilik';
    document.getElementById('ab-us-com-text-4').textContent = 'YouTube ga video';
  }
});