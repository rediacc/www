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

![Resim 1](/assets/images/UserGuide/1-Register.png)(Resim 1)

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.  
2. Sağ üst köşedeki **Register** butonuna tıklayın. (Resim 1)  
3. Açılan formda aşağıdaki bilgileri doldurun: (Resim 2)  
   - **Firma Adı**  
   - **E-posta adresi**  
   - **Parola**

![Resim 2](/assets/images/UserGuide/2_Create_New_Account.png)(Resim 2)

4. **Create Account** butonuna tıklayın.  
   E-posta adresinize bir doğrulama kodu gönderilecektir.  
5. E-postanıza gelen doğrulama bağlantısına tıklayarak hesabınızı etkinleştirin. (Resim 3)

![Resim 3](/assets/images/UserGuide/3_Create_New_Account_Activation_Code.png)(Resim 3)

---

### 1.2 Giriş Yapma

1. Ana sayfada **Login** seçeneğine tıklayın.  
2. E-posta ve parolanızı girin. (Resim 4)

![Resim 4](/assets/images/UserGuide/4_Login_SignIn.png) (Resim 4)

3. Başarılı girişten sonra **Resources** ekranına yönlendirilirsiniz. (Resim 5)

![Resim 5](/assets/images/UserGuide/5_Resorces_Main.png)(Resim 5)

---

## 2. Arayüz Tanıtımı

Giriş işleminden sonra karşınıza çıkan ekran temel olarak **Resources** ve **System** bölümlerinden oluşur.

### 2.1 Resources (Kaynak) Bölümü

Bu bölüm, **Makinalar**, **Repo** ve **Storage** kaynaklarının eklenmesi, listelenmesi, düzenlenmesi ve silinmesi işlemlerini içerir.

---

### 2.1.1 Makinalar

1. Yeni bir makina eklemek için **Makinalar** bölümü seçiliyken sağ üst köşedeki **Add Machine** butonuna tıklayın. (Resim 6)

![Resim 6](/assets/images/UserGuide/6_Create_Machine.png) (Resim 6)

2. Açılan formda aşağıdaki bilgileri doldurun: (Resim 7)

   - **Machine Name:** Makine ismi  
   - **IP Address:** Makine IP adresi  
   - **User Name:** Kullanıcı adı  
   - **SSH Password (Temporary):** Kullanıcı şifresi  

![Resim 7](/assets/images/UserGuide/7_Machine_Add_Interface.png)
(Resim 7)

3. **Create** butonuna tıklayarak makine oluşturun.

---

### 2.1.2 Repo Oluşturma ve İşlemleri

#### a) Repo Oluşturma

1. Yeni bir repo oluşturmak için, makine sekmesinden eklemiş olduğunuz makineyi seçin ve  
   **Action → Create Repo** butonuna tıklayın. (Resim 8)

![Resim 8](/assets/images/UserGuide/8_Repostory_Create.png) (Resim 8)

2. Açılan formda aşağıdaki bilgileri doldurun: (Resim 9)

   - **Repository Name:** Repository ismi  
   - **Size:** GB cinsinden büyüklük  
   - **Select Template:** Template seçimi  
   - **Access Password:** Şifre  
3. **Create** butonuna basın.  
![Resim 9](/assets/images/UserGuide/9_Repostory_Create_Interface.png)  (Resim 9)
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın. (Resim 10)  
![Resim 10](/assets/images/UserGuide/10_Repostory_Task_Complated.png)  (Resim 10)
5. Repo oluşturma işlemi tamamlanmıştır. (Resim 11)
![Resim 11](/assets/images/UserGuide/11_Repostory_show.png) (Resim 11)
---

#### b) Repo Klonlama

1. Oluşturulan repoyu seçin.  
2. **fx** butonuna tıklayın.  (Resim 12)
 ![Resim 12](/assets/images/UserGuide/12_Repo_Clone.png) (Resim 12)
3. Açılan menüden **Clone** seçeneğini seçin.   (Resim 13)
![Resim 13](/assets/images/UserGuide/13_RepoClone2.png) (Resim 13)
4. **Completed** mesajını gördüğünüzde klonlama işlemi tamamlanmıştır. **Close** ile pencereyi kapatın. (Resim 14)
![Resim 14](/assets/images/UserGuide/14_RepoClone_Complated.png) (Resim 14)
---

#### c) Repo “Up” İşlemi

1. “Up” yapmak istediğiniz repoyu seçin.  (Resim 15)  
2. **fx** tuşuna basın.  
3. **Up** tuşuna basın.  
![Resim 15](/assets/images/UserGuide/15_RepoUp.png) (Resim 15)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 16)
![Resim 16](/assets/images/UserGuide/16_RepoUpComplated.png) (Resim 16)
---

#### d) Repo “Push” İşlemi

1. “Push” işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **Up** butonuna tıklayın. (Resim 17)  
![Resim 17](/assets/images/UserGuide/17_Repo_Push.png) (Resim 17)
3. Açılan formda bilgileri doldurun:   (Resim 18)
   - **Destination Filename:** Hedef dosya adı  
   - **Destination Type:** Hedef tipi  
   - **Destination:** Hedef  
   ![Resim 18](/assets/images/UserGuide/18_RepoPush_Add_Form.png) (Resim 18)
4. **Add to Queue** butonuna basın.  
5. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 19)
![Resim 19](/assets/images/UserGuide/19_Repo_Push_Complated.png) (Resim 19)
---

## 3. Kullanıcı Ayarları

1. Kullanıcı ile ilgili ayarları açmak için **System** sekmesine tıklayın.  (Resim 20) 
![Resim 20](/assets/images/UserGuide/20_User_Setting.png)  (Resim 20)
2. **Users, Teams & Permissions** sekmesindeki **Create Team** butonuna tıklayın.  (Resim 21) 
![Resim 21](/assets/images/UserGuide/21_User_add_Form.png) (Resim 21)
3. Formu doldurun:   (Resim 22)
   - **Team Name:** Takım ismi  
   - **SSH Private Key:** Şifre  
   - **SSH Public Key:** Şifre  
![Resim 22](/assets/images/UserGuide/22_Team_Create.png)(Resim 22)
4. **Create** butonuna basarak takım oluşturun.  (Resim 23)
5. **Users** sekmesine tıklayın.  
![Resim 23](/assets/images/UserGuide/23_user_create.png) (Resim 23)
6. **Create User** butonuna tıklayın ve açılan formu doldurun:  (Resim 24)
   - **Email:** Mail adresi  
   - **Password:** Şifre  
![Resim 24](/assets/images/UserGuide/24_User_create_form2.png) (Resim 24)
7. **Create** butonuna basın. Kullanıcı ekleme işlemi tamamlanmıştır. (Resim 25)
![Resim 25](/assets/images/UserGuide/25_User_create_list.png)(Resim 25)
---

**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
