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

![Resim 1](resim1.png)

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.  
2. Sağ üst köşedeki **Register** butonuna tıklayın. (Resim 1)  
3. Açılan formda aşağıdaki bilgileri doldurun: (Resim 2)  
   - **Firma Adı**  
   - **E-posta adresi**  
   - **Parola**

![Resim 2](resim2.png)

4. **Create Account** butonuna tıklayın.  
   E-posta adresinize bir doğrulama kodu gönderilecektir.  
5. E-postanıza gelen doğrulama bağlantısına tıklayarak hesabınızı etkinleştirin. (Resim 3)

![Resim 3](resim3.png)

---

### 1.2 Giriş Yapma

1. Ana sayfada **Login** seçeneğine tıklayın.  
2. E-posta ve parolanızı girin. (Resim 4)

![Resim 4](resim4.png)

3. Başarılı girişten sonra **Resources** ekranına yönlendirilirsiniz. (Resim 5)

![Resim 5](resim5.png)

---

## 2. Arayüz Tanıtımı

Giriş işleminden sonra karşınıza çıkan ekran temel olarak **Resources** ve **System** bölümlerinden oluşur.

### 2.1 Resources (Kaynak) Bölümü

Bu bölüm, **Makinalar**, **Repo** ve **Storage** kaynaklarının eklenmesi, listelenmesi, düzenlenmesi ve silinmesi işlemlerini içerir.

---

### 2.1.1 Makinalar

1. Yeni bir makina eklemek için **Makinalar** bölümü seçiliyken sağ üst köşedeki **Add Machine** butonuna tıklayın. (Resim 6)

![Resim 6](resim6.png)

2. Açılan formda aşağıdaki bilgileri doldurun: (Resim 7)

   - **Machine Name:** Makine ismi  
   - **IP Address:** Makine IP adresi  
   - **User Name:** Kullanıcı adı  
   - **SSH Password (Temporary):** Kullanıcı şifresi  

![Resim 7](resim7.png)

3. **Create** butonuna tıklayarak makine oluşturun.

---

### 2.1.2 Repo Oluşturma ve İşlemleri

#### a) Repo Oluşturma

1. Yeni bir repo oluşturmak için, makine sekmesinden eklemiş olduğunuz makineyi seçin ve  
   **Action → Create Repo** butonuna tıklayın. (Resim 8)

![Resim 8](resim8.png)

2. Açılan formda aşağıdaki bilgileri doldurun:

   - **Repository Name:** Repository ismi  
   - **Size:** GB cinsinden büyüklük  
   - **Select Template:** Template seçimi  
   - **Access Password:** Şifre  

3. **Create** butonuna basın.  
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın.  
5. Repo oluşturma işlemi tamamlanmıştır.

---

#### b) Repo Klonlama

1. Oluşturulan repoyu seçin.  
2. **fx** butonuna tıklayın.  
3. Açılan menüden **Clone** seçeneğini seçin.  
4. **Completed** mesajını gördüğünüzde klonlama işlemi tamamlanmıştır. **Close** ile pencereyi kapatın.

---

#### c) Repo “Up” İşlemi

1. “Up” yapmak istediğiniz repoyu seçin.  
2. **fx** tuşuna basın.  
3. **Up** tuşuna basın.  
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır.

---

#### d) Repo “Push” İşlemi

1. “Push” işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **Up** butonuna tıklayın.  
3. Açılan formda bilgileri doldurun:  
   - **Destination Filename:** Hedef dosya adı  
   - **Destination Type:** Hedef tipi  
   - **Destination:** Hedef  
4. **Add to Queue** butonuna basın.  
5. “Completed” mesajı geldiğinde işlem tamamlanmıştır.

---

## 3. Kullanıcı Ayarları

1. Kullanıcı ile ilgili ayarları açmak için **System** sekmesine tıklayın.  
2. **Users, Teams & Permissions** sekmesindeki **Create Team** butonuna tıklayın.  
3. Formu doldurun:  
   - **Team Name:** Takım ismi  
   - **SSH Private Key:** Şifre  
   - **SSH Public Key:** Şifre  
4. **Create** butonuna basarak takım oluşturun.  
5. **Users** sekmesine tıklayın.  
6. **Create User** butonuna tıklayın ve açılan formu doldurun:  
   - **Email:** Mail adresi  
   - **Password:** Şifre  
7. **Create** butonuna basın. Kullanıcı ekleme işlemi tamamlanmıştır.

---

**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
