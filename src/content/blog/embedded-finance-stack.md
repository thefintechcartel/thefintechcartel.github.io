---
title: "Embedded Finance Is Eating Software — Here's the Stack Behind It"
description: "Every app wants to be a bank now. Stripe, Unit, and the API economy have made that disturbingly easy. Here's what's under the hood."
pubDate: 2025-06-08
author: You
category: Tech
tags: [embedded-finance, api, stripe, banking, baas]
draft: false
---

There's a pattern worth noticing: the most-used financial products in your life probably aren't made by a bank.

Your Swiggy wallet. Ola Money. The EMI option that appeared when you checked out on Flipkart. The credit card that's actually just a Slice card wrapped in a different brand. These are embedded finance products — and the infrastructure that makes them possible has gotten disturbingly easy to wire up.

## What "Embedded Finance" Actually Means

Embedded finance is when a non-financial company adds financial services to its product. Not linking to a bank — actually offering the service itself, inside the experience.

The classic example is Uber offering its drivers instant pay-outs to a branded debit card. Uber isn't a bank. But it acts like one at the point of need, and its users never leave the app.

The key technical enabler is Banking as a Service (BaaS) — a layer of APIs that let any company plug into regulated banking infrastructure without becoming a bank themselves.

## The Stack

Here's roughly how the layers work:

**Regulated bank at the bottom** — Someone has to actually hold the deposits and carry the banking license. In India, this might be an RBI-licensed bank like SBM or Suryoday. In the US, it's often Cross River or Evolve.

**BaaS middleware** — Companies like Unit (US), Razorpay (India), or Setu sit between the regulated bank and the end-product. They abstract the messy compliance and core banking systems into clean REST APIs.

**Your product on top** — You call the API. You create a wallet, issue a virtual card, initiate a payout. You own the user experience. The BaaS layer and bank handle the rest.

## Why This Is a Big Deal

The marginal cost of adding a wallet to a consumer app dropped by roughly 90% between 2018 and 2023. What used to require a banking license, a compliance team, and a custom integration with a core banking system now takes a few API calls and a signed BaaS agreement.

This means every startup with a captive user base is now asking: should we also be their bank?

The answer is often yes, because financial services have dramatically higher margins than the core product. A food delivery company makes 4–6% margins on food. A lending product layered on top of that transaction data can make 15–20%.

## What Could Go Wrong

The regulatory arbitrage that makes this work is not permanent. The RBI has already tightened prepaid payment instrument rules once. The CFPB in the US is actively scrutinizing BaaS arrangements.

The embedded finance stack is efficient — until the regulated bank at the bottom decides the reputational risk isn't worth the revenue, as happened when several US banks pulled out of BaaS partnerships in 2023.

The infrastructure is real and powerful. The regulatory moat is not as wide as most founders assume.
