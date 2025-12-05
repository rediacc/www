---
title: Web Application
description: Understanding web application architecture and deployment with Rediacc.
category: Core Concepts
order: 1
language: en
---
# Rediacc Platformu Kullanım Kılavuzu

## Genel Bakış

**Rediacc**, yapay zeka destekli yedekleme hizmetleri sunan bir bulut platformudur.  

Bu kılavuz, [https://www.rediacc.com/](https://www.rediacc.com/) adresindeki web arayüzünün temel kullanımını anlatır.

### Amaç

Bu dokümanın amacı:

- Yeni kullanıcıların platforma hızlı şekilde adapte olmasını sağlamak  
- Temel işlevleri (kaynak yönetimi, yedekleme) adım adım açıklamak  

---

## 1. Hesap Oluşturma ve Giriş

### 1.1 Kayıt Olma

![Resim 1](/assets/images/UserGuide/1_GirisYap.png)(Resim 1)

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.  
2. Sağ üst köşedeki **Giriş Yap** butonuna tıklayın. (Resim 1)  
3. Açılan ekrandan **Kayıt Olun** butonuna tıklayın.(Resim 1.1)![Resim 1.1](/assets/images/UserGuide/1_1_KayitOl.png) (Resim1.1)

4. Açılan formda aşağıdaki bilgileri doldurun: (Resim 2)  
   - **Şirket Adı**  
   - **E-posta adresi**  
   - **Şifre**

![Resim 2](/assets/images/UserGuide/2_1KayitOlForm.png)
(Resim 2)

4. **Hesap Oluştur** butonuna tıklayın.  
   E-posta adresinize bir doğrulama kodu gönderilecektir.  
5. E-postanıza gelen doğrulama kodunu **Aktivasyon Kodu** alanına yazarak **Hesabı Doğrula** tuşuna bastığınızda hesabınız etkinleşecektir.(Resim 3)

![Resim 3](/assets/images/UserGuide/3_KodAktiveEkrani.png)
(Resim 3)

---

### 1.2 Giriş Yapma

1. Ana sayfada sağ üst köşedeki **Giriş Yap** butonuna tıklayın.
2. E-posta ve parolanızı girin ve **Oturumu Aç** butonuna basın.(Resim 4)

![Resim 4](/assets/images/UserGuide/4_GirisEkrani.png) 
(Resim 4)

3. Başarılı girişten sonra **Ana ekrana**  yönlendirilirsiniz. (Resim 5)

![Resim 5](/assets/images/UserGuide/5_AnaEkran.png)(Resim 5)

---

## 2. Arayüz Tanıtımı

Giriş işleminden sonra karşınıza çıkan ekran temel olarak **Organizasyon** , **Makineler** ve **Ayarlar** bölümlerinden oluşur.

## 1. Organizasyon 

1.1 Kullanıcı işlemleri için **Organizasyon** altındaki **Kullanıcılar** sekmesine tıklayın.Açılan sayfadan **"+"** simgesine tıklayın.   (Resim 6)
![Resim 6](/assets/images/UserGuide/6_KullaniciEkleTus.png)  (Resim 6)
   1. **Kullanıcı Oluştur** butonuna tıklayın ve açılan formu doldurun. (Resim 7)
 
![Resim 7](/assets/images/UserGuide/7_KullaniciolusturForm.png) 
(Resim 7)
   2. **Oluştur** butonuna basın. Kullanıcı ekleme işlemi tamamlanmıştır. (Resim 8)
![Resim 8](/assets/images/UserGuide/8_KullaniciListe.png)(Resim 8)

1.2 Takım işlemleri için **Organizasyon** altındaki **Takımlar** sekmesine tıklayın.Açılan sayfadan **"+"** simgesine tıklayın.   (Resim 9) 
![Resim 9](/assets/images/UserGuide/9_TakimEkleButon.png) (Resim 9)
   1.1. **Takım Oluştur** butonuna tıklayın ve açılan Formu doldurun:   (Resim 10)

![Resim 10](/assets/images/UserGuide/10_TakimEkleForm.png) **Oluştur** butonuna basarak takım oluşturun.  (Resim 10)

---
### 2.1 Makineler  Bölümü

Bu bölüm, **Makinalar**, **Repo** ve **Storage** kaynaklarının eklenmesi, listelenmesi, düzenlenmesi ve silinmesi işlemlerini içerir.

---

### 2.1.1 Makinalar

1. Yeni bir makina eklemek için **Makinalar** bölümü seçiliyken sağ üst köşedeki **Makine Ekle** butonuna tıklayın. (Resim 11)

![Resim 11](/assets/images/UserGuide/11_MakineEkle.png) (Resim 11)

2. Açılan formdan zorunlu alanları doldurduktan sonra **Test Bağlantısı** butonuna tıklayın ve bağlantı başarılı olduğunda **Olutşur** butonuna basın.(Resim 12)

![Resim 12](/assets/images/UserGuide/12_MakineEkleForm.png)
(Resim 12)

---

### 2.1.2 Repo Oluşturma ve İşlemleri

#### a) Repo Oluşturma

1. Yeni bir repo oluşturmak için, *"Makineler"* sekmesinden eklemiş olduğunuz *"Makineyi"* seçin **'+'** butonuna basın (Resim13)

![Resim 13](/assets/images/UserGuide/13_RepoEkleButon.png) (Resim 13)

2. Açılan formdan alanları doldurun: (Resim 14)

   - **Şablon seçmeyi unutmayın**
3. **Oluştur** butonuna basın.  
![Resim 14](/assets/images/UserGuide/14_RepoFormEkran.png)  (Resim 14)
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın. (Resim 15)  
![Resim 15](/assets/images/UserGuide/15_RepoYuklenmeEkran.png)  (Resim 15)
5. Repo oluşturma işlemi tamamlanmıştır. (Resim 16)
![Resim 16](/assets/images/UserGuide/16_RepoList.png) (Resim 16)
---

#### b) Repo Klonlama

1. Oluşturulan repoyu seçin.  
2. **fx** butonuna tıklayın.  (Resim 17)
 ![Resim 12](/assets/images/UserGuide/17_RepoKopyalaButon.png) (Resim 17)
3. Açılan menüden **çatal** seçeneğini seçin.   (Resim 17)
![Resim 17](/assets/images/UserGuide/17_RepoKopyalaButon.png) (Resim 17)
4. **Completed** mesajını gördüğünüzde klonlama işlemi tamamlanmıştır. **Close** ile pencereyi kapatın. (Resim 18)
![Resim 14](/assets/images/UserGuide/18_RepoFormEkrani.png) (Resim 18)
---

#### c) Repo “Up” İşlemi

1. “Up” yapmak istediğiniz repoyu seçin.  (Resim 19)  
2. **fx** tuşuna basın.  
3. **yukarı** tuşuna basın.  
![Resim 19](/assets/images/UserGuide/19_Repo_Up.png) (Resim 19)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 20)
![Resim 20](/assets/images/UserGuide/20_RepoUpComplated.png) (Resim 20)
---

#### d) Repo “Yedekleme” İşlemi

1. **“Yedekleme”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **yedekleme** butonuna tıklayın.  
![Resim 21](/assets/images/UserGuide/21_RepoYedekleme.png) (Resim 21)
3. Açılan formda bilgileri doldurun:   (Resim 21)
   
4. **Kuyruğa Ekle** butonuna basın.  
5. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 19)
![Resim 19](/assets/images/UserGuide/19_Repo_Push_Complated.png) (Resim 19)
---



**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
