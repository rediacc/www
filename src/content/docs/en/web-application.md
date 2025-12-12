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

![Resim 1](/assets/images/UserGuideEng/1_Login.png)(Resim 1)

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.  
2. Sağ üst köşedeki **Login** butonuna tıklayın. (Resim 1)  
3. Açılan ekrandan **Register** butonuna tıklayın.(Resim 1.1)![Resim 1.1](/assets/images/UserGuideEng/1_1_Register.png) (Resim1.1)

4. Açılan formda aşağıdaki bilgileri doldurun: (Resim 2)  
   - **Şirket Adı**  
   - **E-posta adresi**  
   - **Şifre**

![Resim 2](/assets/images/UserGuideEng/2_CreateAcount.png)
(Resim 2)

4. **Create Account** butonuna tıklayın.  
   E-posta adresinize bir doğrulama kodu gönderilecektir.  
5. E-postanıza gelen doğrulama kodunu **Activation Code** alanına yazarak **Verify Account** butonuna bastığınızda hesabınız etkinleşecektir.(Resim 3)

![Resim 3](/assets/images/UserGuideEng/3_VerificationCode.png)
(Resim 3)

---

### 1.2 Giriş Yapma

1. Ana sayfada sağ üst köşedeki **Login** butonuna tıklayın.(Resim 1)
2. E-posta ve parolanızı girin ve **Sign In** butonuna basın.(Resim 4)

![Resim 4](/assets/images/UserGuideEng/4_SignIn.png) 
(Resim 4)

3. Başarılı girişten sonra **Ana ekrana**  yönlendirilirsiniz. (Resim 5)

![Resim 5](/assets/images/UserGuideEng/5_Dashboard.png)(Resim 5)

---

## 2. Arayüz Tanıtımı

Giriş işleminden sonra karşınıza çıkan ekran temel olarak **Organization** , **Machines** ve **Settings** bölümlerinden oluşur.

## 2.1. Organization

   2.1.1 Kullanıcı işlemleri için **Organization** altındaki **Users** sekmesine tıklayın.Açılan sayfadan **"+"** simgesine tıklayın.   (Resim 6)
![Resim 6](/assets/images/UserGuideEng/6_Users.png)  (Resim 6)
   1. **Create User** butonuna tıklayın ve açılan formu doldurun. (Resim 7)
 
![Resim 7](/assets/images/UserGuideEng/7_UserAdd.png) 
(Resim 7)
   2. **Create** butonuna basın. Kullanıcı ekleme işlemi tamamlanmıştır. (Resim 8)
![Resim 8](/assets/images/UserGuideEng/8_UserList.png)(Resim 8)

1.2 Takım işlemleri için **Organization** altındaki **Teams** sekmesine tıklayın.Açılan sayfadan **"+" Create Teams** simgesine tıklayın.   (Resim 9) 
![Resim 9](/assets/images/UserGuideEng/9_Teams.png) (Resim 9)
   1.1. **Create Teams** butonuna tıklayın ve açılan Formu doldurun:   (Resim 10)

![Resim 10](/assets/images/UserGuideEng/10_TeamsCreate.png) **Create** butonuna basarak takım oluşturun.  (Resim 10)

---
### 2.2 Machines

Bu bölüm, **Machines**, **Repo** ve **Storage** kaynaklarının eklenmesi, listelenmesi, düzenlenmesi ve silinmesi işlemlerini içerir.

---

### 2.2.1 Machines

1. Yeni bir makina eklemek için **Machines** bölümü seçiliyken sağ üst köşedeki **Add Machine** butonuna tıklayın. (Resim 11)

![Resim 11](/assets/images/UserGuideEng/11_MachinesAdd.png) (Resim 11)

2. Açılan formdan zorunlu alanları doldurduktan sonra **Test Connection** butonuna tıklayın ve bağlantı başarılı olduğunda **Create** butonuna basın.(Resim 12)

![Resim 12](/assets/images/UserGuideEng/12_0MachineCreate.png)
(Resim 12)

3. Açılan formdan **Test Complated** mesajı görüldüğünde **close** butonuna basarak makine ekleme işlemini tamamlayın.(Resim 12.1)
![Resim 12.1](/assets/images/UserGuideEng/12_1MachineCreate2.png)
(Resim 12.1)

4. Eklenmiş olan makinaların detayını görmek için bir makine seçip ![Resim 12.3](/assets/images/UserGuideEng/12_3viewDetals.png)  **View Details** butonuna basın.Açılan sayfadan makine ile ilgili bilgilere ulaşabilirsiniz.  (Resim 12.2)

![Resim 12.2](/assets/images/UserGuideEng/12_2MachineViewDetals.png)
(Resim 12.2)

5. Eklenmiş olan makinalar ile ilgili değişiklik yapmak için ![Resim 12.4](/assets/images/UserGuideEng/12_4EditButon.png)  **Edit** butonuna basın.Açılan sayfadan makine ile ilgili düzenlemeleri yaptıktan sonra **save** butonuna basın. (Resim 12.3)

![Resim 12.25](/assets/images/UserGuideEng/12_5EditForm.png)
(Resim 12.3)

6. Eklenmiş olan makinalar ile ilgili geçmişe dönük yapılan işlemleri görmek için ![Resim 12.6](/assets/images/UserGuideEng/12_6TracaButon.png)  **Trace** butonuna basın.Açılan sayfada makine ile ilgili geçmişe dönük yapılan işlemler listelenir. (Resim 12.4)

![Resim 12.25](/assets/images/UserGuideEng/12_7TraceList.png)
(Resim 12.4)

7. Eklenmiş olan bir makinayı silmek için ![Resim 12.7](/assets/images/UserGuideEng/12_8DeleteButon.png)  **Delete** butonuna basın.Açılan sayfada **Delete** butonuna basın.Silme işlemi tamamlanmıştır. (Resim 12.5)

![Resim 12.25](/assets/images/UserGuideEng/12_9DeleteForm.png)
(Resim 12.5)

---

### 2.1.2 Repo Oluşturma ve İşlemleri

#### a) Repo Oluşturma

1. Yeni bir repo oluşturmak için, *"Machines"* sekmesinden eklemiş olduğunuz *"Machine"* seçin **'+' Create Repo** butonuna basın (Resim13)

![Resim 13](/assets/images/UserGuideEng/13_CreateRepoAdd.png) (Resim 13)

2. Açılan formdan zorunlu alanları doldurun: (Resim 14)

   - **Şablon seçmeyi unutmayın !**
3. **Create** butonuna basın.  
![Resim 14](/assets/images/UserGuideEng/14_RepoForm.png)  (Resim 14)
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın. (Resim 15)  
![Resim 15](/assets/images/UserGuideEng/15_RepoComplate.png)  (Resim 15)
5. Repo oluşturma işlemi tamamlanmıştır. (Resim 16)
![Resim 16](/assets/images/UserGuideEng/16_Repolist.png) (Resim 16)
---

#### b) Repo Fork İşlemi

1. Oluşturulan repoyu seçin.  
2. **fx** butonuna tıklayın.  (Resim 17)
 ![Resim 17](/assets/images/UserGuideEng/17_0ForkButon.png) (Resim 17)
3. Açılan menüden **fork** butonuna basın.   (Resim 17)

4. Açılan formdan **Add to Queqe** butonuna basın(Resim 17.1)
 ![Resim 17.1](/assets/images/UserGuideEng/17_1ForkForm.png) (Resim 17.1)
4. **Completed** mesajını gördüğünüzde *forklama* işlemi tamamlanmıştır. **Close** ile pencereyi kapatın. (Resim 18)
![Resim 14](/assets/images/UserGuideEng/18_RepoComplated.png) (Resim 18)
---

#### c) Repo “Up” İşlemi

1. “Up” yapmak istediğiniz repoyu seçin.  (Resim 19)  
2. **fx** tuşuna basın.  
3. **up** tuşuna basın.  
![Resim 19](/assets/images/UserGuideEng/19_RepoUp.png) (Resim 19)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 20)
![Resim 20](/assets/images/UserGuideEng/20_RepoUpComplate.png) (Resim 20)
---
#### d) Repo “Down” İşlemi

1. “Down” yapmak istediğiniz repoyu seçin.  (Resim 21)  
2. **fx** tuşuna basın.  
3. **down** tuşuna basın.  
![Resim 21](/assets/images/UserGuideEng/21_DownButon.png) (Resim 21)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 22)
![Resim 22](/assets/images/UserGuideEng/22_DownComplated.png) (Resim 22)
---

#### d) Repo “deploy” İşlemi

1. “deploy” yapmak istediğiniz repoyu seçin. 
2. **fx** tuşuna basın.  
3. **deploy** tuşuna basın. (Resim 23)  

![Resim 23](/assets/images/UserGuideEng/23_DeployButon.png) (Resim 23)

4. Açılan formdan zorunlu alanları doldurun ve **Add to Queu** tuşuna basın.  (Resim 24)   

![Resim 24](/assets/images/UserGuideEng/24_DeployForm.png) (Resim 24)

5. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 25)

![Resim 25](/assets/images/UserGuideEng/25_DeployComplated.png) (Resim 25)

---

#### e) Repo “Backup” İşlemi

1. **“backup”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **backup** butonuna tıklayın. (Resim 26) 
![Resim 26](/assets/images/UserGuideEng/26_BackupButon.png) (Resim 26)
3. Açılan formdan zorunlu alanları doldurun ve **Add to Queue** tuşuna basın. 
![Resim 27](/assets/images/UserGuideEng/27_BackupForm.png) 
   
 
4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 28)
![Resim 28](/assets/images/UserGuideEng/28_BackupComplated.png) (Resim 28)

---

#### f) Repo “templates” İşlemi

1. **“templates”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **templates** butonuna tıklayın. (Resim 29) 
![Resim 29](/assets/images/UserGuideEng/29_TemplatesButon.png) (Resim 29)
3. Açılan formdan bir **"templates"** seçin ve **Add to Queue** tuşuna basın.(Resim 30)
![Resim 30](/assets/images/UserGuideEng/30_TemplatedForm.png) 
   
 
4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 31)
![Resim 31](/assets/images/UserGuideEng/31_TemplatedComplated.png) (Resim 31)

---


#### g) Repo “unmount” İşlemi

1. **“unmount”** işlemi yapılacak repoyu seçin.  
2. **fx--> advanced** butonuna basın ve açılan menüden **unmount** butonuna tıklayın. (Resim 32) 
![Resim 32](/assets/images/UserGuideEng/32_UnmountButon.png) (Resim 32)
  
   
3. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 33)
![Resim 33](/assets/images/UserGuideEng/33_UnmoundComplated.png) (Resim 33)

---
#### g) Repo “expand” İşlemi

1. **“expand”** işlemi yapılacak repoyu seçin.  
2. **fx--> advanced** butonuna basın ve açılan menüden **expand** butonuna tıklayın. (Resim 34) 
![Resim 34](/assets/images/UserGuideEng/34_ExpandButon.png) (Resim 34)
 
 3. Açılan formdan  **"New Size"** alanını doldurun ve **Add to Queue** tuşuna basın.(Resim 35)
![Resim 35](/assets/images/UserGuideEng/35_ExpandForm.png) (Resim 35)

4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 36)
![Resim 36](/assets/images/UserGuideEng/36_ExpandComplated.png) (Resim 36)

---

#### h) Repo “rename” İşlemi

1. **“rename”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **rename** butonuna tıklayın. (Resim 34) 
![Resim 37](/assets/images/UserGuideEng/37_RenameButon.png) (Resim 37)
 
 3. Açılan formu doldurun ve **save** tuşuna basın.(Resim 38)
![Resim 38](/assets/images/UserGuideEng/38_RenameForm.png) 
(Resim 38)

4. “rename” işlemi tamamlanmıştır. 

---
#### h) Repo “delete repository” İşlemi

1. **“delete repository”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **delete repository** butonuna tıklayın. (Resim 40) 
![Resim 40](/assets/images/UserGuideEng/40_DeleteRopoButon.png) (Resim 40)
 
 ---hata3. Açılan formu doldurun ve **save** tuşuna basın.(Resim 38)
![Resim 38](/assets/images/UserGuideEng/38_RenameForm.png) 
(Resim 38)

----hata4. “rename” işlemi tamamlanmıştır. 

---
<!-- ### 2.1.3 Repo Connection İşlemleri

#### a) desktop-aap

1. desktop-app işlemi  için  ![Resim 131](/assets/images/UserGuideEng/karesimge.png) ,  butona basın.

2. Açılan listeden **desktop-app** butonuna basın (Resim 45)
![Resim 14](/assets/images/UserGuideEng/45_DesktopAppButon.png)  (Resim 45)

3. **Create** butonuna basın.  
![Resim 14](/assets/images/UserGuideEng/14_RepoForm.png)  (Resim 14)
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın. (Resim 15)   -->

**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
