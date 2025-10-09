# SAFE

> [!WARNING]
> Work in progress. Use at your own risk.

Superintelligence Alignment through Financial Engineering (SAFE) is a financial product for aligning superintelligence.

To start using SAFE, open your Node project and run the following command:

```sh
npm install safeprod
```

After the installation, SAFE is ready to use. It is not required to credit the usage of SAFE in your code; however, if you would like to, copy and paste the following comments to the top of the file you are using SAFE in:

```js
// SAFE - Superintelligence Alignment through Financial Engineering. 
//   Repository: https://github.com/safe-prod/safeprod
//   License: GNU LGPLv2.1 (https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)
```

Additionally, you can write which of the features of the license you are using and why, so that you can better document your risk profile.
|Feature|Description|Reason|
|---|---|---|
|*Permissions*|||
|Commercial use|The licensed material and derivatives may be used for commercial purposes.|You can use the product as a financial product.|
|Modification|The licensed material may be modified.|You can tailor the product to your risk profile.|
|Distribution|The licensed material may be distributed.|You can contribute to keeping the product liquid.|
|Private use|The licensed material may be used and modified in private.|You can mitigate the security risk of publicly linking your private resources to the product.|
|*Limitations*|||
|Liability|This license includes a limitation of liability.|You cannot create litigation risk from your inability to use the product.|
|Warranty|This license explicitly states that it does NOT provide any warranty.|The entire risk as to the quality and performance of the product is to be borne by you.|
|*Conditions*|||
|License and copyright notice|A copy of the license and copyright notice must be included with the licensed material.|Your copies of the product maintain the same risk exposure.|
|State changes|Changes made to the licensed material must be documented.|Your modifications to the risk profile are common knowledge, helping your stakeholders be informed about the current risk profile.|
|Disclose source|Source code must be made available when the licensed material is distributed.|You can modify the risk profile of variants of the product.|
|Same license (library)|Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used, or this condition may not apply to works that use the licensed material as a library.|Your modifications change only the risk profile of the product, not the risk exposure, for if it did, it would be a different product. Therefore, your modifications must be released under the same license. In contrast, when you embed the product in your own product, it implies a change in risk exposure. Therefore, in this case, you do not have to have the same license as the product. |

There is only one member exported by SAFE: the `SAFE` class. Import it by writing the following line at the top of your file:

```js
import SAFE from "safeprod"
```

The SAFE class is the factory for the SAFE financial product. To create a new product, declare a variable, name it appropriately, and use the `new` keyword followed by the class name, and pass in the API URLs of the embedding model and large language model you want the product to have as its underlying.

```js
let mySafe = new SAFE(llmUrl, embeddingUrl)
```

At the most basic level, every financial product can be decomposed into a series of credits and debits, and SAFE is no different.

From your point of view, a credit is a debt you issue to the superintelligence e.g. questions, tasks, job descriptions. Questions, tasks etc. are liabilities, and as a result, when you give it to the superintelligence, you are crediting i.e. increasing the liabilities of the superintelligence and decreasing your liabilities.

```js
let {tenderCredit, tenderDebit} = await mySafe.credit("Write a tender for the customer John.")
```

From the superintelligence's point of view, a credit is a debt it issues to you e.g. tool requests, resource requests. In the example above, the superintelligence would likely ask you for information on John. This will be stored in the `tenderCredit` variable as `"Could you please provide resources on who John is?"`. Tool requests, resource requests etc. are liabilities, and as a result, when the superintelligence gives it to you, it is crediting i.e. increasing your liabilities, and decreasing its liabilities.

From the superintelligence's point of view, a debit is a debt you issue to the superintelligence to settle its credit e.g. tools, resources. Since your tools and resources are assets, when you provide it to the superintelligence, you are reducing your assets since the superintelligence partially controls it now. As a result, you are debiting i.e. increasing the assets the superintelligence has and decreasing the assets you have.

 ```js
let {customerCredit, customerDebit} = await mySafe.debit(tenderCredit, {name: "John Doe", age: 28, profession: "Building Contractor", good: "10 slabs of granite"})
```

From your point of view, a debit is the debt the superintelligence issues to settle your credit e.g. answers, subtask completions, work artifacts. In the example above, `customerCredit` would be empty if the superintelligence thinks it has enough information, and `customerDebit` would contain something like `"John Doe, we have the 10 slabs of granite you have requested, and we quote a price of 1 dollar per slab of granite."` Since answers, work artifacts etc. are assets, when the superintelligence provides it to you, it is debiting i.e. increasing your assets and decreasing its assets.
