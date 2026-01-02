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

![Resim 1](/assets/images/UserGuideEng/01_login.png)(Resim 1)

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.  
2. Sağ üst köşedeki **Login** butonuna tıklayın. (Resim 1)  
3. Açılan ekrandan **Register** butonuna tıklayın.(Resim 1.1)![Resim 1.1](/assets/images/UserGuideEng/02_register.png) (Resim1.1)

4. Açılan formda aşağıdaki bilgileri doldurun: (Resim 2)  
   - **Şirket Adı**  
   - **E-posta adresi**  
   - **Şifre**

![Resim 2](/assets/images/UserGuideEng/03_create_account.png)
(Resim 2)

4. **Create Account** butonuna tıklayın.  
   E-posta adresinize bir doğrulama kodu gönderilecektir.  
5. E-postanıza gelen doğrulama kodunu **Activation Code** alanına yazarak **Verify Account** butonuna bastığınızda hesabınız etkinleşecektir.(Resim 3)

![Resim 3](/assets/images/UserGuideEng/04_verification_code.png)
(Resim 3)

---

### 1.2 Giriş Yapma

1. Ana sayfada sağ üst köşedeki **Login** butonuna tıklayın.(Resim 1)
2. E-posta ve parolanızı girin ve **Sign In** butonuna basın.(Resim 4)

![Resim 4](/assets/images/UserGuideEng/05_sign_in.png) 
(Resim 4)

3. Başarılı girişten sonra **Ana ekrana**  yönlendirilirsiniz. (Resim 5)

![Resim 5](/assets/images/UserGuideEng/06_dashboard.png)(Resim 5)

---

## 2. Arayüz Tanıtımı

Giriş işleminden sonra karşınıza çıkan ekran temel olarak **Organization** , **Machines** ve **Settings** bölümlerinden oluşur.

## 2.1. Organization--> Users

   2.1.1 Kullanıcı işlemleri için **Organization** altındaki **Users** sekmesine tıklayın.Açılan sayfadan **"+"** simgesine tıklayın.   (Resim 6)
![Resim 6](/assets/images/UserGuideEng/07_users.png)  
(Resim 6)
   1. **Create User** butonuna tıklayın ve açılan formu doldurun. (Resim 7)
 
![Resim 7](/assets/images/UserGuideEng/08_user_add.png) 
(Resim 7)

2. **Create** butonuna basın. Kullanıcı ekleme işlemi tamamlanmıştır. (Resim 8)
![Resim 8](/assets/images/UserGuideEng/09_user_list.png)
(Resim 8)

  2.1.2. **Permissions** işlemi için **Organization** altındaki **Users** sekmesine tıklayın.Bir kullanıcı seçtikten sonra **"Permissions"** butonuna tıklayın.   (Resim 6.1)
![Resim 6.1](/assets/images/UserGuideEng/10_users_permissions.png)  
(Resim 6.1)

2.1.3. Açılan ekrandan bir *Permissions Grup* seçin ve **Assign** butonuna basın. Permissions işlemi tamamlanmıştır.(Resim 6.2)
![Resim 6.2](/assets/images/UserGuideEng/11_user_permissions_form.png) 
(Resim 6.2)

 2.1.4 **Users Activate** işlemi için **Organization** altındaki **Users** sekmesine tıklayın.Bir kullanıcı seçtikten sonra **"Activate"** butonuna tıklayın.   (Resim 6.3)

![Resim 6.3](/assets/images/UserGuideEng/12_users_activation.png)  
(Resim 6.3)

2.1.5. Açılan ekrandan bir *General.Yes*  butonuna basın. Activate işlemi tamamlanmıştır.(Resim 6.4)
![Resim 6.4](/assets/images/UserGuideEng/13_users_activation_confirm.png) 
(Resim 6.4)

 2.1.6 **Users Trace** işlemi için **Organization** altındaki **Users** sekmesine tıklayın.Bir kullanıcı seçtikten sonra **"Trace"** butonuna tıklayın.   (Resim 6.5)

![Resim 6.5](/assets/images/UserGuideEng/14_users_trace.png)  
(Resim 6.5)

2.1.7. Açılan ekrandan bir *Export*  butonu altında istediğimiz formatı tıkladığımızda *Trace* işlemi tamamlanmıştır.(Resim 6.6)
![Resim 6.6](/assets/images/UserGuideEng/15_user_trace_export.png) 
(Resim 6.6)

---

## 2.2. Organization--> Teams
2.2.1  **'Teams'** işlemi için  **Create Teams** butonuna tıklayın ve açılan Formu doldurun:   (Resim 10)

![Resim 10](/assets/images/UserGuideEng/16_teams_create.png) 
( Resim 10)
2.2.2 *Create* butonuna basarak takım oluşturun.

2.2.3  **'Teams Edit'** işlemi için bir **Teams** seçin  **Edit** butonuna tıklayın ve açılan Formda değişiklikleri yaptıktan sonra *Save* butonuna tıklayın.Edit işlemi tamamlanmıştır. (Resim 10.1)

![Resim 10.1](/assets/images/UserGuideEng/17_teams_edit_form.png) 
( Resim 10.1)

2.2.4  **Teams Members** işlemi için bir **Teams** seçin  **Members** butonuna tıklayın ve açılan Formda *Add Member* sekmesine tıklayın. Bir kullanıcı seçtikten sonra *Add Member '+' * tuşuna basın. (Resim 10.2)

![Resim 10.2](/assets/images/UserGuideEng/18_teams_members_form.png) 
( Resim 10.2)

2.2.5  **Teams Trace** işlemi için bir **Teams** menüsü altınta  **Trace** butonuna tıklayın ve açılan Formdan *Export* butonuna basın ve liste almak istediğiniz formata tıklayın.*Trace işlemi* tamamlanmıştır. (Resim 10.3)

![Resim 10.3](/assets/images/UserGuideEng/19_teams_trace.png) 
( Resim 10.3)

2.2.6  **Teams Delete** işlemi için bir **Teams** menüsü altınta bir **Teams** seçin ve  *Delete* butonuna basın ve açılan formdan *general.yes* butonuna basın silme işlemi tamamlanmıştır. (Resim 10.4)

![Resim 10.4](/assets/images/UserGuideEng/20_teams_delete.png) 
( Resim 10.4)
## 2.3. Organization--> Access

2.3.1  **Create Permission Group** işlemi için **Access** menüsü tıklayın ve açılan sayfanın sağ üst köşesindeki **+** simgesine tıklayın *(Create Group)*.Açılan formdan *Grup adını yazın* ve *Ok* butonuna basın. (Resim 10.5)

![Resim 10.5](/assets/images/UserGuideEng/21_create_access.png) 
( Resim 10.5)

2.3.2  **Permission** işlemi için **Access** menüsü altınta bir **Users** seçin ve  *Permission* butonuna basın.Açılan formda seçili User'e ait yetkiler listelenecektir.İstediğiniz yetkiyi seçin ve *Remove* butonuna basın *Permission* işlemi tamamlanmıştır. (Resim 10.5.1)

![Resim 10.5.1](/assets/images/UserGuideEng/22_access_permission.png) 
( Resim 10.5.1)

---
### 2.2 Machines

Bu bölüm, **Machines**, **Repo** ve **Storage** kaynaklarının eklenmesi, listelenmesi, düzenlenmesi, silinmesi gibi işlemlerini içerir.

---

### 2.2.1 Machines

1.1 Yeni bir makina eklemek için **Machines** bölümü seçiliyken sağ üst köşedeki **Add Machine** butonuna tıklayın. (Resim 11)

![Resim 11](/assets/images/UserGuideEng/23_machines_add.png) (Resim 11)

1.2 Açılan formdan zorunlu alanları doldurduktan sonra **Test Connection** butonuna tıklayın ve bağlantı başarılı olduğunda **Create** butonuna basın. (Resim 12)

![Resim 12](/assets/images/UserGuideEng/24_machine_create.png)
(Resim 12)

1.3 Açılan formdan **Test Complated** mesajı görüldüğünde **close** butonuna basarak makine ekleme işlemini tamamlayın.(Resim 12.1)
![Resim 12.1](/assets/images/UserGuideEng/25_machine_create_complete.png)
(Resim 12.1)

2.1 *Connectivity Test* için en az bir makina eklenmiş ise ![Resim 12.1.1](/assets/images/UserGuideEng/26_connectivity_test_button.png)  **Connectivity Test** butonuna basın.

2.2 Açılan formdan  bir makina seçerek *Run Test* butonuna basın Test işlemi tamamlanmıştır.![Resim 12.1.1](/assets/images/UserGuideEng/27_connectivity_test_form.png)  **Connectivity Test** butonuna basın.

3.**Refresh** işlemi için **Refresh** butonuna basın. ![Resim 12.3](/assets/images/UserGuideEng/28_refresh.png)   Makine listeleme işlemi tamamlanmıştır.

4.Eklenmiş olan makinaların detayını görmek için bir makine seçip ![Resim 12.3](/assets/images/UserGuideEng/29_view_details_button.png)  **View Details** butonuna basın.Açılan sayfadan makine ile ilgili bilgilere ulaşabilirsiniz.  (Resim 12.2)

![Resim 12.2](/assets/images/UserGuideEng/30_machine_view_details.png)
(Resim 12.2)

5. Eklenmiş olan makinalar ile ilgili değişiklik yapmak için ![Resim 12.4](/assets/images/UserGuideEng/31_edit_button.png)  **Edit** butonuna basın.Açılan sayfadan makine ile ilgili düzenlemeleri yaptıktan sonra **save** butonuna basın. (Resim 12.3)

![Resim 12.5](/assets/images/UserGuideEng/32_edit_form.png)
(Resim 12.3)

6. Eklenmiş olan makinalar ile ilgili geçmişe dönük yapılan işlemleri görmek için ![Resim 12.6](/assets/images/UserGuideEng/33_trace_button.png)  **Trace** butonuna basın.Açılan sayfada makine ile ilgili geçmişe dönük yapılan işlemler listelenir. (Resim 12.4)

![Resim 12.7](/assets/images/UserGuideEng/34_trace_list.png)
(Resim 12.4)

7. Eklenmiş olan bir makinayı silmek için ![Resim 12.7](/assets/images/UserGuideEng/35_delete_button.png)  **Delete** butonuna basın.Açılan sayfada **Delete** butonuna basın.Silme işlemi tamamlanmıştır. (Resim 12.5)

![Resim 12.9](/assets/images/UserGuideEng/36_delete_form.png)
(Resim 12.5)


8. Eklenmiş olan bir makinaye *Remote* olmak için ![Resim 12.10](/assets/images/UserGuideEng/37_remote_button.png)  **Remote** butonuna basın.Açılan menüden **Run on Server** butonuna basın ve **Setup** butonuna basın.Açılan sayfadan *Task Complated* mesajını gördüğünüzde *Setup* işlemi tamamlanmıştır. (Resim 12.11)

![Resim 12.11](/assets/images/UserGuideEng/38_server_setup.png)
(Resim 12.11)

9. Eklenmiş olan bir makinayi seçip *Remote* butonuna basın.Açılan menüden **Run on Server** butonuna basın ve **Hello** butonuna basın.![Resim 12.12](/assets/images/UserGuideEng/39_remote_hello.png)  Açılan sayfadan *Task Complated* mesajını gördüğünüzde *Hello* işlemi tamamlanmıştır. (Resim 12.13)

![Resim 12.13](/assets/images/UserGuideEng/40_remote_hello_complete.png)
(Resim 12.13)

10. Eklenmiş olan bir makinayi seçip *Remote* butonuna basın.Açılan menüden **Run on Server** butonuna basın ve **advanced** butonuna basın.Açılan sayfadan *Machine Functions* menüsünden istediğiniz fonksiyonu seçip *Add to Queue* butonun basın İşlem tamamlanmıştır. (Resim 12.14)

![Resim 12.14](/assets/images/UserGuideEng/41_remote_advanced.png)
(Resim 12.14)

11. Eklenmiş olan bir makinayi seçip *Remote* butonuna basın.Açılan menüden **Connectivity Test** butonuna basın.![Resim 12.15](/assets/images/UserGuideEng/42_connectivity_test.png) connectivity Test işlemi tamamlanmıştır.



---

### 2.1.2 Repo Oluşturma ve İşlemleri

#### a) Repo Oluşturma

1. Yeni bir repo oluşturmak için, *"Machines"* sekmesinden eklemiş olduğunuz *"Machine"* seçin **'+' Create Repo** butonuna basın (Resim13)

![Resim 13](/assets/images/UserGuideEng/43_create_repo_add.png) (Resim 13)

2. Açılan formdan zorunlu alanları doldurun: (Resim 14)

   - **Şablon seçmeyi unutmayın !**
3. **Create** butonuna basın.  
![Resim 14](/assets/images/UserGuideEng/44_repo_form.png)  (Resim 14)
4. Açılan pencerede **Completed** mesajını gördükten sonra **Close** butonuna basın. (Resim 15)  
![Resim 15](/assets/images/UserGuideEng/45_repo_complete.png)  (Resim 15)
5. Repo oluşturma işlemi tamamlanmıştır. (Resim 16)
![Resim 16](/assets/images/UserGuideEng/46_repo_list.png) (Resim 16)
---

#### b) Repo Fork İşlemi

1. Oluşturulan repoyu seçin.  
2. **fx** butonuna tıklayın.  (Resim 17)
 ![Resim 17](/assets/images/UserGuideEng/47_fork_button.png) (Resim 17)
3. Açılan menüden **fork** butonuna basın.   (Resim 17)

4. Açılan formdan **Add to Queue** butonuna basın (Resim 17.1)
 ![Resim 17.1](/assets/images/UserGuideEng/48_fork_form.png) (Resim 17.1)
5. **Completed** mesajını gördüğünüzde *forklama* işlemi tamamlanmıştır. **Close** ile pencereyi kapatın. (Resim 18)
![Resim 18](/assets/images/UserGuideEng/49_repo_completed.png) (Resim 18)
---

#### c) Repo “Up” İşlemi

1. “Up” yapmak istediğiniz repoyu seçin.  (Resim 19)  
2. **fx** tuşuna basın.  
3. **up** tuşuna basın.  
![Resim 19](/assets/images/UserGuideEng/50_repo_up.png) (Resim 19)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 20)
![Resim 20](/assets/images/UserGuideEng/51_repo_up_complete.png) (Resim 20)
---
#### d) Repo “Down” İşlemi

1. “Down” yapmak istediğiniz repoyu seçin.  (Resim 21)  
2. **fx** tuşuna basın.  
3. **down** tuşuna basın.  
![Resim 21](/assets/images/UserGuideEng/52_down_button.png) (Resim 21)
4. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 22)
![Resim 22](/assets/images/UserGuideEng/53_down_completed.png) (Resim 22)
---

#### e) Repo “deploy” İşlemi

1. “deploy” yapmak istediğiniz repoyu seçin. 
2. **fx** tuşuna basın.  
3. **deploy** tuşuna basın. (Resim 23)  

![Resim 23](/assets/images/UserGuideEng/54_deploy_button.png) (Resim 23)

4. Açılan formdan zorunlu alanları doldurun ve **Add to Queue** tuşuna basın. (Resim 24)   

![Resim 24](/assets/images/UserGuideEng/55_deploy_form.png) (Resim 24)

5. “Completed” mesajını gördüğünüzde işlem tamamlanmıştır. (Resim 25)

![Resim 25](/assets/images/UserGuideEng/56_deploy_completed.png) (Resim 25)

---

#### f) Repo “Backup” İşlemi

1. **“backup”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **backup** butonuna tıklayın. (Resim 26) 
![Resim 26](/assets/images/UserGuideEng/57_backup_button.png) (Resim 26)
3. Açılan formdan zorunlu alanları doldurun ve **Add to Queue** tuşuna basın. 
![Resim 27](/assets/images/UserGuideEng/58_backup_form.png) 
   
 
4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 28)
![Resim 28](/assets/images/UserGuideEng/59_backup_completed.png) (Resim 28)

---

#### g) Repo “templates” İşlemi

1. **“templates”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **templates** butonuna tıklayın. (Resim 29) 
![Resim 29](/assets/images/UserGuideEng/60_templates_button.png) (Resim 29)
3. Açılan formdan bir **"templates"** seçin ve **Add to Queue** tuşuna basın.(Resim 30)
![Resim 30](/assets/images/UserGuideEng/61_templates_form.png) 
   
 
4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 31)
![Resim 31](/assets/images/UserGuideEng/62_templates_completed.png) (Resim 31)

---


#### h) Repo “unmount” İşlemi

1. **“unmount”** işlemi yapılacak repoyu seçin.  
2. **fx--> advanced** butonuna basın ve açılan menüden **unmount** butonuna tıklayın. (Resim 32) 
![Resim 32](/assets/images/UserGuideEng/63_unmount_button.png) (Resim 32)
  
   
3. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 33)
![Resim 33](/assets/images/UserGuideEng/64_unmount_completed.png) (Resim 33)

---
#### i) Repo “expand” İşlemi

1. **“expand”** işlemi yapılacak repoyu seçin.  
2. **fx--> advanced** butonuna basın ve açılan menüden **expand** butonuna tıklayın. (Resim 34) 
![Resim 34](/assets/images/UserGuideEng/65_expand_button.png) (Resim 34)
 
 3. Açılan formdan  **"New Size"** alanını doldurun ve **Add to Queue** tuşuna basın.(Resim 35)
![Resim 35](/assets/images/UserGuideEng/66_expand_form.png) (Resim 35)

4. “Completed” mesajı geldiğinde işlem tamamlanmıştır. (Resim 36)
![Resim 36](/assets/images/UserGuideEng/67_expand_completed.png) (Resim 36)

---

#### i) Repo “rename” İşlemi

1. **“rename”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **rename** butonuna tıklayın. (Resim 37) 
![Resim 37](/assets/images/UserGuideEng/68_rename_button.png) (Resim 37)
 
 3. Açılan formu doldurun ve **save** tuşuna basın.(Resim 38)
![Resim 38](/assets/images/UserGuideEng/69_rename_form.png) 
(Resim 38)

4. “rename” işlemi tamamlanmıştır. 

---
#### j) Repo “delete repository” İşlemi

1. **“delete repository”** işlemi yapılacak repoyu seçin.  
2. **fx** butonuna basın ve açılan menüden **delete repository** butonuna tıklayın. (Resim 40) 
![Resim 40](/assets/images/UserGuideEng/70_delete_repo_button.png) (Resim 40)
 
3. Açılan formda **Delete** butonuna basın. Silme işlemi tamamlanmıştır.

---
#### k) Repo “repo View Details” İşlemi

1. Bir repo seçin ve   **View Details** butonuna basın. (Resim 42) 
![Resim 42](/assets/images/UserGuideEng/71_repo_view_button.png) (Resim 42)
2. Seçilen repo ile ilgili bilgiler açılacaktır. (Resim 43) 
![Resim 43](/assets/images/UserGuideEng/72_repo_details_view.png) (Resim 43)
 
---

 ### 2.1.3 Repo Connection İşlemleri

#### a) desktop-app

1. desktop-app işlemi  için  Local butonuna basın (Resim 49)![Resim 49](/assets/images/UserGuideEng/73_repo_connection_local.png)(Resim 49)

2. Açılan listeden **desktop-app** butonuna basın (Resim 50)
![Resim 50](/assets/images/UserGuideEng/74_repo_connection.png) (Resim 50)
3. Açılan sayfadan **Open xdg-open** butonuna basın (Resim 50.1)
![Resim 50.1](/assets/images/UserGuideEng/75_desktop_open_page.png) (Resim 50.1)

---
## 2.3 Settings
 **Settings** işlemi program ile ilgili bazı  ayarları yapmak için kullanılır.
 
a) **Profile Şifre değiştirme İşlemi** 
   1- **Setting->Profiles**  butonuna tıklayın.(Resim 55)
   ![Resim 55](/assets/images/UserGuideEng/76_profiles_button.png)  (Resim 55)
   2- Açılan sayfadan *Change Password* butonuna tıklayın (Resim 55.1)
    ![Resim 55.1](/assets/images/UserGuideEng/77_profiles_change_button.png)  (Resim 55.1)
   3- Açılan formdan yeni Password girdikten sonra *Change Password* butonuna tıklayın (Resim 55.2)
    ![Resim 55.2](/assets/images/UserGuideEng/78_profiles_change_form.png)  (Resim 55.2)

---

## 2.4 Storage
 **Storage** depola ile ilgili işlemler yapılır.

 a) **Storage İşlemi** 
   1- **Storage** menüsü altındaki *Add Storage* butonuna tıklayın. (Resim 56)
   ![Resim 56](/assets/images/UserGuideEng/79_storage_add_button.png)  (Resim 56)
   2- Açılan formdan zorunlu alanları doldurun.*Create* butonuna basın. (Resim 56.1)
    ![Resim 56.1](/assets/images/UserGuideEng/80_storage_form.png)  (Resim 56.1) 

---

## 2.5 Credentials
 **Credentials** oluşturulan repoların şifreleri  ile ilgili işlemler yapılır.

 ### 2.5.1 Credentials İşlemi 
   a)- **Edit İşlemi**
   1-Credentials  menüsü altındaki bir repo seçin ve *Edit* butonuna tıklayın.(Resim 57)
   ![Resim 57](/assets/images/UserGuideEng/81_credentials.png)  (Resim 57)
   2- Açılan formdan değişiklikeri yaptıktan sonra *Save* butonuna basın. (Resim 57.1)
    ![Resim 57.1](/assets/images/UserGuideEng/82_credentials_form.png)  (Resim 57.1) 
   b- **Trace İşlemi** 
   1-Credentials menüsü altındaki bir repo seçin ve *Trace* butonuna tıklayın.(Resim 57.2)
   ![Resim 57](/assets/images/UserGuideEng/83_credentials_trace_button.png)  (Resim 57.2)
   
   2- Açılan sayfada seçilen reponun *Denetim Geçmişi* - listelenmiştir. *Export* butonuna tıklayıp istenilen formatta listeyi dışa aktarımını sağlayın. (Resim 57.3)
   ![Resim 57](/assets/images/UserGuideEng/84_credentials_list_export.png)  (Resim 57.3)

c- **Delete İşlemi** 
   1-Credentials menüsü altındaki bir repo seçin ve *Delete* butonuna tıklayın.(Resim 57.4)
   ![Resim 57.4](/assets/images/UserGuideEng/85_credentials_delete.png)  (Resim 57.4)
   
   2- Açılan sayfadan  *Delete* - butonuna basın.Silme işlemi tamamlanmıştır. (Resim 57.5)
   ![Resim 57.5](/assets/images/UserGuideEng/86_credentials_delete_confirm.png)  (Resim 57.5)

## 2.6.1 Queue İşlemi 
   1-Queue menüsüne tıklayın.(Resim 58)
   ![Resim 58](/assets/images/UserGuideEng/87_queue_button.png)  (Resim 58)
   2- Açılan sayfadan *export*  butonuna tıklayın.Açılan menüden dışa aktarım için format seçin.Aktarım işlemi tamamlanmıştır. (Resim 58.1)
    ![Resim 58.1](/assets/images/UserGuideEng/88_queue_export.png)  (Resim 58.1) 
## 2.7.1 Audit İşlemi 
   
   1-Audit menüsüne tıklayın.(Resim 59)
   ![Resim 59](/assets/images/UserGuideEng/89_audit_list.png)  (Resim 59)
   2- Açılan sayfadan *export*  butonuna tıklayın.Açılan menüden dışa aktarım için format seçin.Aktarım işlemi tamamlanmıştır. (Resim 58.1)
    ![Resim 59.1](/assets/images/UserGuideEng/90_audit_export.png)  (Resim 59.1) 

---
**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
