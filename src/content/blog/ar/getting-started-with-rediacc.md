---
title: الشروع في العمل مع Rediacc
description: تعرف على كيفية إعداد Rediacc وبدء استخدامه في دقائق معدودة باستخدام هذا الدليل الشامل.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: ar
---

Rediacc هو نظام قوي لتنفيذ المهام الموزعة يجعل من السهل إدارة المهام وتنفيذها عبر أجهزة متعددة. سيرشدك هذا الدليل إلى الأساسيات التي ستساعدك على العمل.

## تثبيت

### المتطلبات الأساسية 
- Linux أو macOS (دعم Windows عبر MSYS2) 
- بايثون 3.8 أو أعلى 
- وصول SSH إلى أجهزتك المستهدفة

### الإعداد السريع

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## مهمتك الأولى

### 1. المصادقة

```bash
./rediacc login
```

سيطالبك هذا بإدخال بيانات الاعتماد الخاصة بك وإعداد رمز المصادقة الخاص بك.

### 2. قم بإدراج الأجهزة المتوفرة

```bash
./rediacc list machines --team Default
```

يعرض هذا جميع الأجهزة الموجودة في فريقك الافتراضي والمتوفرة لتنفيذ المهمة.

### 3. أنشئ مهمة بسيطة

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. مراقبة التقدم

استخدم وحدة تحكم الويب على https://www.rediacc.com لمراقبة مهامك في الوقت الفعلي.

## المفاهيم الأساسية

### نظام قائمة الانتظار 
تتم إدارة المهام من خلال نظام قائمة الانتظار على أساس الأولوية. يمكن تعيين أولويات المهام من 1 (الأعلى) إلى 5 (الأدنى).

### نظام القبو 
يتم تخزين البيانات الحساسة مثل بيانات اعتماد SSH ومفاتيح API بشكل آمن في خزائن مشفرة.

### الفرق 
قم بتنظيم أجهزتك ومواردك حسب الفريق لتحسين التحكم في الوصول والعزل.

## الخطوات التالية

- [تعرف على مزامنة الملفات](/docs/file-sync) 
- [استكشاف مرجع واجهة سطر الأوامر](/docs/cli-reference) 
- [راجع الأمثلة المتقدمة](/blog/advanced-task-workflows)

تنفيذ مهمة سعيدة!