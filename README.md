<!-- react-text-animation-examples -->
<!-- React Projelerinde Kullanılabilecek Text Animasyon Denemeleri (ReactJS + styled-components) -->
# TEXT ANIMATIONS

Siteye eklenebilecek bazı metin animasyonları üzerinde çalıştım. <br>
Responsive tasarım yoktur; sadece animasyon çalışması mevcuttur.

### Teknoloji
Bu, yalnızca bir animasyon çalışmasıdır; front-end teknolojileri olarak   
- `React` ve 
- `Styled-Components` kullanılmıştır.

[Demoya buradan ulaşabilirsiniz.](https://hkaratass.github.io/react-text-animation-examples/)

### 1. Write Animation Components
Kişisel web sitelerinde sıkça karşılaşılan yazı animasyonunu, React için bir component olarak tasarladım.
#### Özellikler
- **WORD:** Yazdırılacak kelimeler, componente bir dizi olarak verilir.
- Mouse ile üzerine gelindiğinde animasyon durdurulur.


### 2. Combination Lock Animation Components
Bir çanta şifre kilidi gibi harfler sırayla döner ve seçili metne gelince durur. Tasarım üzerinde bazı revizyonlar gerekli.

#### Özellikler
- **WORD:** Harfler, girilen metne ulaşınca animasyon durur.
- **RANDOM:** Harfler rastgele bir sıradan başlayarak döner. (RANDOM eklenmezse varsayılan olarak A'dan başlar.)
  
#### Eklenebilir Seçenekler
- **DELAY:** Değişim, belirli bir milisaniye sonra başlar.
- **BEFORE:** Başlangıçta belirli bir metin gösterilir ve ardından değişim başlar.

### 3. Split Flap Animation Components
İnternette bulduğum bir kod demosunu (orijinali jQuery) inceleyerek tersine mühendislik ve CSS incelemesi yaparak React’a uyarladım. Sayı değişimlerinde oldukça şık bir animasyon.

#### Özellikler
- **WORD:** Harfler, girilen metne ulaşınca animasyon durur.
  
##### Ekstra Eklediklerim
- **RANDOM:** Harfler rastgele bir sıradan başlar (İnternet demosunda her zaman randomdur.). (RANDOM eklenmezse varsayılan olarak A'dan başlar.)
- **DELAY:** Belirli bir milisaniye sonra animasyon başlar.
- **BEFORE:** Başlangıçta gösterilen bir metin ile animasyon başlar.

#### Eklenip Geliştirilebilecekler
- **Uzunluk Desteği:** Var olan metin uzunluğu ile yeni gelen metin uzunluğu farklı olabilir hale getirilebilir.
    - Şimdilik `BEFORE` ve `WORD` metin uzunluğunu eşit tutmak için boşluk karakteri kullanılabilir.
- **Limit Desteği:** Belirli bir karakter limiti koyarak, örneğin 20 karakterlik bir alan belirlenebilir ve metin değiştikçe boş kalan alanlar boşluk ile doldurulabilir.
    - Şimdilik `BEFORE` ve `WORD` metin uzunluğunu eşit tutmak için boşluk karakteri kullanılabilir. Örneğin `BEFORE` için "ISTANBUL____________", `WORD` için "ANKARA______________" şeklinde 20 karaktere kadar boşluk eklenerek kullanılabilir. 
- **Blockchain Entegrasyonu:** Dinleyiciler eklenerek, blockchain işlemleri ile entegre edilebilir. Dinleyici bir olay yakaladığında, animasyon ile metin değişir.

## DEMO
[Demoya buradan ulaşabilirsiniz.](https://hkaratass.github.io/react-text-animation-examples/)
