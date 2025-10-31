# 🌾 AgriConnect – ER Diagram

### 👥 Team: FoodChainX
**Project:** Smart Agriculture & Food Distribution Platform  
**Database Model:** Entity–Relationship (ER) Diagram

---

## 🧩 Entities & Relationships

Below is the conceptual ER diagram structure showing relationships among key entities in **AgriConnect**.



┌───────────────────┐
│     FARMER        │
├───────────────────┤
│ farmer_id (PK)    │
│ name              │
│ email             │
│ phone             │
│ location          │
│ land_size         │
└─────────┬─────────┘
│ 1
│
│ n
┌─────────▼─────────┐
│       CROP        │
├───────────────────┤
│ crop_id (PK)      │
│ farmer_id (FK)    │ → FARMER.farmer_id
│ crop_name         │
│ season            │
│ price             │
│ yield_estimate    │
└─────────┬─────────┘
│ 1
│
│ n
┌─────────▼─────────┐
│     LISTING       │
├───────────────────┤
│ listing_id (PK)   │
│ crop_id (FK)      │ → CROP.crop_id
│ buyer_id (FK)     │ → BUYER.buyer_id
│ quantity          │
│ price_per_unit    │
│ status            │
└─────────┬─────────┘
│ n
│
│ 1
┌─────────▼─────────┐
│      BUYER        │
├───────────────────┤
│ buyer_id (PK)     │
│ name              │
│ email             │
│ phone             │
│ location          │
└───────────────────┘
      │
      │
      │ 1
      │
      │ n

┌─────────▼─────────┐
│   PDS_RECORD      │
├───────────────────┤
│ pds_id (PK)       │
│ user_id (FK)      │ → BUYER.buyer_id
│ ration_item       │
│ quantity          │
│ status            │
│ pickup_date       │
└───────────────────┘

---

## 🔗 Relationships Summary

| Relationship | Description |
|---------------|-------------|
| **Farmer → Crop** | One farmer can grow multiple crops *(1:N)* |
| **Crop → Listing** | One crop can appear in multiple listings *(1:N)* |
| **Buyer → Listing** | One buyer can purchase multiple listings *(1:N)* |
| **Buyer → PDS_Record** | One buyer (citizen) can have multiple ration records *(1:N)* |

---

## 🧱 Database Tables Overview

| Table | Key Fields | Description |
|--------|-------------|-------------|
| **Farmer** | farmer_id (PK) | Stores farmer info and land details |
| **Crop** | crop_id (PK), farmer_id (FK) | Stores crop data linked to farmer |
| **Listing** | listing_id (PK), crop_id (FK), buyer_id (FK) | Stores marketplace listings |
| **Buyer** | buyer_id (PK) | Stores buyer/consumer info |
| **PDS_Record** | pds_id (PK), user_id (FK) | Tracks ration distribution |

---

## 📊 Notes

- All primary keys are **auto-incrementing integers**.  
- Foreign keys maintain **referential integrity** between related tables.  
- Can be easily implemented using **Prisma ORM with MySQL**.  
- Future expansion: Add tables for `Admin`, `Payment`, and `Delivery`.

---

### 🏁 Tagline  
> “Connecting Farms, Markets, and Meals – the Smarter Way.” 🌱


