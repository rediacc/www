---
title: Kuyruk Sistemi
description: Görev yönetimi ve yürütme için Rediacc kuyruk sistemini anlama.
category: Core Concepts
order: 2
language: tr
---

Kuyruk sistemi Rediacc'ın kalbidir ve makineler arasında görev dağılımını yönetir.

## Genel Bakış

Kuyruk, görevleri aşağıdaki yaşam döngüsüne göre yönetir:

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### Eyaletler

- **BEKLEMEDE** - Görev oluşturuldu, köprü tarafından alınmayı bekliyor 
- **ATANDI** - Bridge görevi üstlendi ve yürütmeye hazırlanıyor 
- **İŞLENİYOR** - Görev şu anda makinede çalışıyor 
- **TAMAMLANDI** - Görev başarıyla tamamlandı 
- **BAŞARISIZ** - Görev bir hatayla karşılaştı 
- **İPTAL EDİLDİ** - Görev manuel olarak iptal edildi

## Görev Özellikleri

Her kuyruk öğesi şunları içerir:

| Emlak | Tür | Açıklama | 
|----------|------|------------| 
| 'görev kimliği' | UUID | Benzersiz görev tanımlayıcı | 
| 'durum' | Numaralandırma | Mevcut yürütme durumu | 
| 'öncelik' | 1-5 | Yürütme önceliği (1 en yüksek) | 
| 'yeniden denemeSayısı' | Sayı | Kalan yeniden deneme denemeleri | 
| `kasaVerileri` | Nesne | Şifreli görev yapılandırması | 
| 'çıkış' | Dize | Görev yürütme çıktısı | 
| 'hata' | Dize | Başarısız olursa hata mesajı | 
| `yaratıldığı tarih' | Zaman Damgası | Görev oluşturma süresi | 
| 'tamamlanma tarihi' | Zaman Damgası | Görev tamamlama süresi |

## Öncelik Sistemi

Görevler öncelik sırasına göre işlenir:

- **P1 (Kritik)** - Derhal uygulama (acil durum, güvenlik) 
- **P2 (Yüksek)** - Dakikalar içinde yürütülür (dağıtımlar) 
- **P3 (Normal)** - Birkaç saat içinde gerçekleştirilir (standart görevler) 
- **P4 (Düşük)** - Arka plan çalışması (bakım) 
- **P5 (Minimum)** - Kaynaklar mevcut olduğunda (temizleme)

### Örnek

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Mekanizmayı Yeniden Dene

Başarısız olan görevler otomatik olarak yeniden denenebilir:

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Yeniden deneme davranışını yapılandırın:

- `retryCount` - Kalan yeniden deneme sayısı 
- `retryDelay` - Yeniden deneme girişimleri arasındaki saniye sayısı 
- `maxRetries` - İzin verilen maksimum yeniden deneme denemesi

## İzleme Sırası

### Kuyruk Durumunu Kontrol Edin

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### Belirli Görevi İzleme

```bash
./rediacc inspect queue task-123
```

### Gerçek Zamanlı İzleme

Gerçek zamanlı kuyruk güncellemeleri ve görselleştirme için web konsolunu kullanın.

## Kasa Verileri

Görevler şifrelenmiş yapılandırmayı içerebilir:

```json
{
  "vaultData": {
    "function": "deploy",
    "repository": "web-app",
    "version": "1.2.3",
    "environment": "production",
    "credentials": {
      "ssh_key": "[encrypted]",
      "api_token": "[encrypted]"
    }
  }
}
```

Kasa verileri sistem tarafından otomatik olarak şifrelenir/şifresi çözülür.

## Toplu İşlemler

Birden fazla görevi verimli bir şekilde işleyin:

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## Sıraya İlişkin En İyi Uygulamalar

1. **Sıra derinliğini izleyin** - Kuyruk çok büyürse uyarı verin 
2. **Uygun öncelikleri belirleyin** - Öncelik 1'i gereğinden fazla kullanmayın 
3. **Toplu işlemi kullanın** - Grupla ilgili görevler 
4. **Yeniden denemeleri akıllıca yapılandırın** - Güvenilirlik ile kaynak kullanımını dengeleyin 
5. **Tamamlanan görevleri arşivleyin** - Sırayı temiz tutun

## Sorun Giderme

### İŞLEMEDE Takılıp Kalan Görevler

Bir görev takılıp kalırsa:

1. Köprü durumunu kontrol edin 
2. Makinenin SSH bağlantısını doğrulayın 
3. Hatalar için görev günlüklerini inceleyin 
4. Gerekirse manuel olarak iptal edin

### Yüksek Kuyruk Birikimi

Kuyruk büyüyorsa:

1. Köprü kapasitesini kontrol edin 
2. Makine kaynaklarını doğrulayın 
3. Köprü yapılandırmasında `batch_size`yi artırın 
4. Daha fazla köprü veya makine ekleyin

### Görev Başarısızlıkları

Her zaman kontrol edin:

1. Görev hata mesajı 
2. Makine günlükleri 
3. Kasa veri bütünlüğü 
4.SSH bağlantısı

[En İyi Uygulamalar](/blog/distributed-task-management-best-practices) bölümünden daha fazla bilgi edinin.