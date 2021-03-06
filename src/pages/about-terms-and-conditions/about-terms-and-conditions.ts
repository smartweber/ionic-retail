import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RtProvider } from '../../providers/rt/rt';

/**
 * Generated class for the AboutTermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-terms-and-conditions',
  templateUrl: 'about-terms-and-conditions.html',
})
export class AboutTermsAndConditionsPage {

  public seoContent:string=`
      <ion-card-title>
          ReelTrail Terms & Conditions
        </ion-card-title>
        <div class="row">
        <div class="col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        Terms &amp; Conditions Goods and Services originating from ReelTrail, LLC are offered to Users conditionally upon Users’ acceptance without modification of the Terms and Conditions contained in this document. ReelTrail, LLC may revise these Terms and
        Conditions of use at any time by updating this document and publishing it on ReelTrail website. Users should visit these Terms and Conditions periodically so to review them, because it is possible they could change from time to time, and they remain binding
        on Users. By accessing, browsing, and/or using the ReelTrail Site, Users acknowledge thereby that Users have read, understood, and agreed to be bound by these Terms and Conditions; and have agreed to comply with all applicable laws and regulations, including
        U.S. export and re-export control laws and regulations. The material provided on this ReelTrail Site is protected by law, including, but not limited to United States copyright laws and international treaties. This ReelTrail Site is operated by the ReelTrail,
        LLC Company from its offices within the United States. The ReelTrail, LLC Company makes no representation that materials in and provided by this Site are appropriate or available for use in geographical locations other than the USA, nor in nations where
        access to them and their contents are illegal and is prohibited. If you do not agree to these Terms of Use, do not use this ReelTrail Site.
        <ol style="list-style-type: none">
          <li>
            <h4 ><i>Section 1. Use Restrictions.</i></h4>
            <ol style="list-style-type: none">
              <li>The contents posted by the ReelTrail, LLC Company on this Site, such as text, graphics, images and other data (“The Materials”), are protected by trademark, patent pending, and copyrights under both United States and foreign laws. Unauthorized use
                of The Materials may violate patent laws, copyright, trademark, and other laws. Except as stated herein, none of The Materials may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by
                any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the prior written permission of the ReelTrail, LLC Company or the copyright owner. Users must abide by all copyright and other proprietary
                notices contained in all ReelTrail content. Users are prohibited to making copies of the Materials/Content on the ReelTrail, LLC site. Users may not sell or modify The Materials nor reproduce, display, publicly perform, distribute, or otherwise
                use The Materials in any way for any public or commercial purpose. The use by Users of The Materials on any other website or in a networked computer environment for any purpose is prohibited. If Users violate any of these ReelTrail Terms and Conditions
                Users’ permission to use The Materials/Content automatically terminates and Users must immediately destroy any copies of the Materials made by them. Users may not, without the ReelTrail Company's permission, "mirror" on any other server any of
                The Materials/Content contained in this ReelTrail Site. Any unauthorized use of any of The Materials/Contents contained on this ReelTrail Site may or will violate patent laws, copyright laws, trademark laws, the laws of privacy and of publicity,
                and the communications regulations and statutes. Users may not use the ReelTrail Site for any purpose that is unlawful or prohibited by these Terms and Conditions. Users may not use the Site in any manner that could damage, disable, overburden,
                or impair the ReelTrail Site, or interfere with any other User's use and enjoyment of the ReelTrail Site. Users may not attempt to gain unauthorized access to the ReelTrail Site through hacking, password mining or by any other means.

                <strong>Inappropriate Use</strong> The Customer, and the Customer’s employees and agents, will not use the ReelTrail Service(s) so as to transmit through the Service(s) by any means any unlawful, harassing, libelous, unsolicited (e.g. commercial
                email (“spam”)), abusive, threatening, harmful, vulgar, obscene or otherwise objectionable material of any kind. The Customer agrees to defend, indemnify, and hold harmless ReelTrail against any claim or action, civil or criminal which arises
                out of the Customers’ use of the ReelTrail Service(s) in any manner. Forbidden materials include counterfeited and pirated materials, animals of any kind, hate crime, revenge crime, obscene written or pictorial materials, abusive language, swearwords,
                sexually and other illicit grooming materials, all and any items which stand outside the law and/or standards of public decency, cheats, confidence tricks, over- exaggerated and/or deceptive descriptions, outright lies, nor any unethical or illicit
                trading means or techniques; nor any other materials or techniques which fall outside general standards of public welfare and decency and/or beyond US Federal and/or State law. A Customer who is deemed by ReelTrail to be in breach of this ‘Inappropriate
                Use’ shall face instant closure of his account. The ReelTrail, LLC Company reserves the right, in its sole discretion, to terminate User access to the ReelTrail Site or any portion thereof and at any time, for any reason or for no reason at all,
                without prior notice or any notice.
              </li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 2. ReelTrail, LLC Company's Liability.</i></h4>
            <ol style="list-style-type: none">
              <li>The Materials may contain inaccuracies and/or typographical errors. The ReelTrail Company makes no representations about the accuracy, reliability, completeness, or timeliness of The Materials, and nor about the results to be obtained from using
                the ReelTrail Site and The Materials. Users’ usage of the ReelTrail Site and of The Materials is at Users’ own risk. Changes are made periodically to the ReelTrail Site and may be made at any time. THE REELTRAIL COMPANY DOES NOT WARRANT THAT THE
                REELTRAIL SITE WILL OPERATE ERROR FREE OR THAT THIS REELTRAIL SITE AND ITS SERVER ARE FREE OF COMPUTER VIRUSES AND OTHER HARMFUL GOODS. IF USERS’ USE OF THE REELTRAIL SITE OR OF THE MATERIALS RESULTS IN A NEED FOR SERVICING OR REPLACING OF USERS’
                EQUIPMENT OR DATA, REELTRAIL, LLC IS NOT RESPONSIBLE OR LIABLE FOR THOSE COSTS AND WILL BE HELD COMPLETELY HARMLESS REGARDLESS OF ANY DAMAGE. THE REELTRAIL SITE AND THE MATERIALS ARE PROVIDED ON AN "AS IS" BASIS WITHOUT ANY WARRANTIES OF ANY KIND.
                THE REELTRAIL COMPANY AND ITS SUPPLIERS, TO THE FULLEST EXTENT PERMITTED BY LAW, DISCLAIM ALL WARRANTIES, INCLUDING THE WARRANTY OF MERCHANTABILITY, NON INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND THE WARRANTY OF FITNESS FOR PARTICULAR PURPOSE.
                THE REELTRAIL WEBSITE, THE REELTRAIL COMPANY AND ITS SUPPLIERS, MAKE NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE MATERIALS, SERVICES, SOFTWARE TEXT, GRAPHICS, AND LINKS THEREIN.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 3. Limitation of Liability and Disclaimer of Consequential Damages.</i></h4>
            <ol style="list-style-type: none">
              <li>IN NO EVENT SHALL THE REELTRAIL, LLC COMPANY, ITS SUPPLIERS, OR ANY THIRD PARTIES MENTIONED AT THIS REELTRAIL SITE BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES,
                LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION) RESULTING FROM OR RELATING TO THE TERMS AND CONDITIONS OF THIS AGREEMENT, TO THE REELTRAIL SITE OR TO THE INTERNET GENERALLY, INCLUDING, WITHOUT LIMITATION, THE USE OR
                INABILITY TO USE THE REELTRAIL SITE, ANY CHANGES TO OR INACCESSIBILITY OF THE REELTRAIL SITE, DELAY, FAILURE, UNAUTHORIZED ACCESS TO OR ALTERATION OF ANY TRANSMISSION OR DATA, ANY SUBMISSIONS BY USERS, OR ANY DATA OR MATERIALS FROM A THIRD PERSON
                ACCESSED ON OR THROUGH THE REELTRAIL SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE REELTRAIL, LLC COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. REELTRAIL WILL BE HELD COMPLETELY HARMLESS
                OF ALL OF THE ABOVE. SOME STATES IN THE UNITED STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO SOME USERS OR USERS SOMETIMES.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 4. Privacy and Protection of Personal Information.</i></h4>
            <ol style="list-style-type: none">
              <li>See ReelTrail “Privacy Policy” document, incorporated herein by reference, for disclosures relating to the collection and use of information which personally identifies a User ("Personal Information").</li>
            </ol>
          </li>   <li>
            <h4><i>Section 5. User Submissions.</i></h4>
            <ol style="list-style-type: none">
              <li>The ReelTrail, LLC Company does not claim ownership of any material, information or idea a User provides to the ReelTrail Company (including feedback and suggestions), nor posts, uploads, inputs or postings to this ReelTrail Site by any means ("Submissions").
                Any Submission, however, will be treated as non-confidential and non- proprietary, and may be disseminated and/or used by the ReelTrail Company or its affiliates for any purpose whatsoever. By posting a Submission, a User grants automatically
                to the ReelTrail Company a royalty free, perpetual, irrevocable nonexclusive license to use, reproduce, modify, publish, edit, translate, distribute, perform, and display such Submissions, either alone or as part of other works in any form, media,
                or technology whether now known or hereafter developed, and to sublicense such rights through multiple tiers of sub-licensees. Notwithstanding the foregoing, all Personal Information provided to the ReelTrail Company will be handled in accordance
                with ReelTrail Company Privacy Policy.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 6. Indemnity and Risks.</i></h4>
            <ol style="list-style-type: none">
              <li>Users agree to defend, indemnify, and hold harmless the ReelTrail Company, its officers, directors, employees and agents, from and against any claims, class action(s), other actions or demands, including without limitation any legal and accounting
                fees, arising out of or resulting from Users’ use of the ReelTrail Site or of The Materials on the ReelTrail Site or arising out of as User’s breach of these Terms and Conditions. ReelTrail LLC shall provide a User notice promptly of any such
                claim, suit, or proceeding and shall assist a User, at a User’s complete expense, in defending any such claim, suit or proceeding. User acknowledges and agrees that participation in activities, such as adventure travel, involves inherent risks
                and dangers of accidents, personal and bodily injury (including death) and property loss or damage. User agrees that he/she has considered the nature and extent of the risks involved and voluntarily choose to assume all such risks, both known
                and unknown, even those risks that result from the negligence of others and assume full responsibility for your participation in such activities. You agree to indemnify, defend and hold harmless ReelTrail, its affiliates, officers, directors,
                employees, agents, services providers and licensors from and against all losses, liabilities, costs (including without limitation attorneys' fees and costs on appeal or at trial), damages, judgments, class action(s), claims, of every kind and
                nature, to the fullest extent permitted by law, arising from or relating in any way to (i) your use of the Site, (ii) the products and services purchased through the Site, (iii) any liabilities, claims, damages and injuries arising from or related
                to any act or omission of a Service Provider or another third party, (iv) your conduct in connection with the Site, or (v) your violation of these Adventures Terms, the Terms of Service, any law or the rights of any third party.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 7. Export Control.</i></h4>
            <ol style="list-style-type: none">
              <li>The United States controls the export of products and of information. Users agree to comply with such controls and not to export or re-export The Materials to countries or persons prohibited under the US export control laws. By downloading The Materials,
                Users are agreeing that they are not in a country where such export is prohibited by the US; and/or that they are not a person or entity to which such export is prohibited. Users are responsible for compliance with the laws of Users’ local jurisdiction
                regarding the import, export, or re-export of The Materials.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 8. Links to Other Sites.</i></h4>
            <ol style="list-style-type: none">
              <li>The ReelTrail Site may contain links to third party web sites ("Linked Sites"). These links are provided solely as a convenience to Users and the inclusion of any such link does not imply endorsement by the ReelTrail, LLC Company of any such Linked
                Site, nor does it imply any association with any Linked Site’s operations. The ReelTrail Company is not responsible for the content of any such Linked Site and does not make any representations regarding the content or accuracy of materials on
                such Linked Sites. The ReelTrail Company is not responsible for any transmission received from any such Linked Site, nor is the ReelTrail Company responsible when any Linked Site is not working appropriately. If Users decide to access such a Linked
                Site, Users do so at their own risk.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 9. General.</i></h4>
            <ol style="list-style-type: none">
              <li>This ReelTrail Site is based in the Commonwealth of South Carolina, United States of America. The ReelTrail, LLC Company makes no claims for The Materials, neither that they are appropriate nor that they may be downloaded outside of the United States.
                All content with the ReelTrail site is ReelTrail, LLC’s ownership and cannot be duplicated, copied, etc., in any way just like the verbiage above states that is in this document explains in the United States or outside the United States. All copyright
                laws, trademark(s) laws and patent laws still apply outside the United States. Access to the ReelTrail Site and/or to The Materials may not be legal when done by certain persons or done in certain countries. If Users access the ReelTrail Site
                from outside of the United States, Users do so at their own risk and are responsible for compliance with the laws of their jurisdiction. These Terms and Conditions are governed by the internal substantive laws of the Commonwealth of South Carolina,
                without respect to its conflict of laws principles. When any provision contained herein is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions
                of set forth herein, which shall remain in full force and effect. No waiver of any term hereunder of these Terms and Conditions shall be deemed a further or continuing waiver of such Terms and/or Condition or any other Terms and/or Condition.
                These Terms and Conditions constitute the entire agreement between Users and the ReelTrail Company with respect to the use of the ReelTrail Site. Any changes to these Terms and Conditions must be made in writing, signed by an authorized representative
                of the ReelTrail Company for it to be binding on the ReelTrail Company. Notwithstanding the foregoing, ReelTrail, LLC, at its sole discretion and without notice, may revise all these Terms and Conditions herein and below at any time by updating
                this document and publishing it here to supersede any former version. Sub- merchant acceptance of the following: ReelTrail uses Braintree, a division of PayPal, Inc. (Braintree) for payment processing. In order for you to use Braintree's payment
                processing services, you must read and agree to the Commercial Entity User Agreement (CEA) available at https://www.braintreepayments.com/legal/cea-wells and the Payment Services Agreement available at https://www.braintreepayments.com/legal/gateway-
                agreement. By accepting this Agreement, you agree:
                <ol type="i">
                  <li>that you have downloaded or printed the CEA, and</li>
                  <li>that you have reviewed and agree to the CEA. If you have questions regarding the CEA or the PSA, please contact Braintree at 877.434.2894</li>
                </ol>
              </li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 10. Taxes. International Fees/Taxes</i></h4>
            <ol style="list-style-type: none">
              <li>Users agree to pay all Local, State Taxes, Personal and Corporate IncomeTaxes, and all other form of taxes in or out of the USA. ReelTrail explains on the purchase receipt emails that all buyers receive in which they are responsible for paying the
                sales taxes based off the year of their receipt to buyers state. Billing amounts are exclusive of any or all taxes, levies, or duties that may be imposed by taxing authorities having jurisdiction over a Customer’s access location. Due to the great
                mobility of access for the ReelTrail Site, Mobile app and Services, a Customer acknowledges, and agrees, to be responsible/ accountable for the payment of any taxes(includes sales and use taxes along with any/all other taxes), levies or duties,
                throughout all states in the USA and countries outside the USA. ReelTrail helps to assist buyers/sellers through the use of a Sales/Use Tax Api source called Taxify. that works on certain transactions resulting in collecting either a sales/use
                tax, being disbursed to the seller. The seller is required to pay the sales tax of the buyer in both a seller/buyer state(s) of nexus directly to the DOR. Reeltrails payment processor will convert and deposit funds to all sellers(in USA) for a
                1% fee based off 130 local currencies in 44 countries(for further information email us at support@reeltrail.com). International customers are responsible for any and all fees/ taxes associated with non-USD currencies that may apply. All Customer(s)/(users)
                are responsible for handling all of their own Income taxes, being personal or business completely being independent contractors and having no employee association with ReelTrail, LLC.</li>
            </ol>
          </li>   <li>
            <h4 ><i>Section 11. Shipping.</i></h4>
            <ol style="list-style-type: none">
              <li>Our goal is to process your order as quickly as possible. Please refer to information in the item description to see if your item may take longer to ship. ReelTrail has different shipping charges depending on the weight of each item in your order.
                For oversized items or heavy items additional Oversize fees may apply. These fees will be indicated during check out prior to your transaction being completed. ReelTrail offers international shipping. Shipping rates vary by country. Please note
                that orders shipping internationally may be subject to Duties and/or VAT. Be sure to check with your country of residence for the additional fees that may be assessed upon delivery. A tracking number will be emailed to you when your order ships.
                This tracking number will allow you to check on the delivery status of your order. We will keep you updated on your order status via email. ReelTrail ships via UPS, FedEx and USPS. Please ensure that the address you use can accept delivery from
                any of our carriers.</li>
            </ol>
          </li>
        </ol>
        Reeltrail reserves the right to alter these policies herein and below at any time. Last updated August 2018
        <h2>ReelTrail Adventures Terms &amp; Conditions</h2>
        The Adventures Terms of Service ("Adventures Terms") is a legal agreement between you and ReelTrail, LLC ("we," "us," or "our") that governs your interaction on ReelTrail.com and other ReelTrail services (collectively, the "Site") and your purchases and use of products and services made available through the Site. By using the Site, you signify that you have read, understand and agree to be bound by all of these Adventures Terms. We have the right to change the Adventures Terms at any time without notice, effective upon its posting to our Site. Your continued use of the Site shall be considered your acceptance to the revised Adventures Terms. These Adventures Terms are in addition to ReelTrail’s Terms of Service and Privacy Policy which also govern your use of ReelTrail Adventures and are incorporated herein by reference.
        <h4><i>ReelTrail Adventures</i></h4>
        <ol>
          <li>ReelTrail Adventures provides a platform that allows you to make purchases from various service providers ("Service Providers"). ReelTrail is not an agent of either you or the Service Providers. Even if an activity appears to be provided by ReelTrail, we use Service Providers to provide and operate such activity and you are still subject to all terms in these Adventures Terms related to Service Providers. You understand and agree that we are not responsible for the products and services you purchase from the Service Providers. The Service Providers, and not ReelTrail, provide those products, services and/or activities and are solely responsible for all issues, warranties, injuries, illnesses, damages, claims, liabilities and costs related to those purchases, services and/or activities. You authorize us to share with Service Providers the information regarding you.</li>
        </ol>
        <h4><i>Service Provider Terms</i></h4>
        <ol>
          <li>Service Providers may require you to agree to additional terms and conditions in connection with the products and services you purchase from them. Please read all additional terms and conditions carefully. You agree to abide by all additional terms and restrictions, including without limitation, availability, age and occupancy requirements, pet policies, policies on children, fares and other restrictions. You agree that any violation of any such terms and/or restrictions may result in cancellation of your reservation, forfeiture of costs and expenses in connection with your reservation, and being charged by ReelTrail for any costs we incur as a result of such violation.</li>
        </ol>
        <h4><i>Orders and Payment</i></h4>
        <ol>
          <li>ReelTrail Adventure listings are $1.00 per day. User’s can make listings as many days as one prefers.           <ol type="A">
              <li>User’s understand there is a 24-hour cancellation/refund period. If a user does not change or update the listing within 24-hours, a refund will not be issued.</li>
              <li>Adventure Listing Options are non-refundable. 2. All purchases and reservations must be paid directly to the Service Provider through the contact information ReelTrail provides. ReelTrail only collects payments from user’s who list their Adventure trips.</li>           </ol>
          </li>
        </ol>
        <h4><i>Booking Availability</i></h4>
        <ol>
          <li>It’s possible that your booking may be available when you place an order with the Service Provider, but becomes unavailable prior to the date of the activity. If this occurs, your sole remedy is to contact the Service Provider to make alternative arrangements or to cancel your reservation.</li>
        </ol>
        <h4><i>Product Descriptions</i></h4>
        <ol>
          <li>We attempt to provide accurate descriptions of the products and services available on our Site. However, we do not warrant that the descriptions are accurate, complete, reliable, current or error-free.</li>
        </ol>
        <h4><i>Pricing of Adventure Trip</i></h4>
        <ol>
          <li>ReelTrail quotes rates with the information that the Service Providers provides ReelTrail. We do not guarantee that any posting offers the best available rates for the products and services available on the Site. While we try to provide accurate pricing information, we cannot insure against pricing errors or changes. Therefore, we reserve the right, in our sole discretion, to cancel any posting placed on the Site if the price was incorrectly provided as a result of an error, modified by the Service Provider and other reasons. You will be responsible for paying all charges/fees directly to the Service Provider when the trip is booked with the Service Provider.</li>
        </ol>
        <h4><i>Cancellations and Changes to Reservations</i></h4>
        <ol>
          <li>Certain adventure trips Posted on the ReelTrail site may have other specific rules and restrictions regarding cancellation and changes, subject to the discretion of the Service Provider. You may be charged a cancellation or change fee and you agree to pay any such cancellation or change fee you incur.</li>
        </ol>
        <h4><i>Taxes, Fees &amp; Incidentals</i></h4>
        <ol>
          <li>Taxes charged in connection with your purchases depend on the type and location of the purchase and/or Service Provider, rules governing Service Providers and other factors. Service Providers may also charge service fees. Before confirming your purchase, we recommend reviewing all such additional taxes and fees. The purchases made with the Service Provider do not include incidental expenses, except as specifically described in your itinerary, and you are liable for all such incidental expenses that you incur during, or in anticipation of, your purchased product and/or service.</li>
        </ol>
        <h4><i>Travel Insurance</i></h4>
        <ol>
          <li>We recommend that you obtain independent travel and other insurance to adequately cover you for medical expenses, accidents, property loss, and curtailment or cancellation of your trip.</li>
        </ol>
        <h4><i>Risks &amp; Indemnity</i></h4>
        <ol>
          <li>You acknowledge and agree that participation in activities, such as adventure travel, involves inherent risks and dangers of accidents, personal and bodily injury (including death) and property loss or damage. You agree that you have considered the nature and extent of the risks involved and voluntarily choose to assume all such risks, both known and unknown, even those risks that result from the negligence of others and assume full responsibility for your participation in such activities.</li> 	<li>You agree to indemnify, defend and hold harmless ReelTrail, its affiliates, officers, directors, employees, agents, services providers and licensors from and against all losses, liabilities, costs (including without limitation attorneys' fees and costs on appeal or at trial), damages, judgments, class action(s), claims, of every kind and nature, to the fullest extent permitted by law, arising from or relating in any way to            <ol type="i">
              <li>your use of the Site</li>
              <li>the products and services purchased through the Site</li>
              <li>any liabilities, claims, damages and injuries arising from or related to any act or omission of a Service Provider or another third party</li>
              <li>your conduct in connection with the Site</li>
              <li>your violation of these Adventures Terms, the Terms of Service, any law or the rights of any third party.</li>            </ol>
          </li>
        </ol>ReelTrail reserves the right to alter these policies at any time. Updated August 2018
        <h2>ReelTrail Marketplace Terms &amp; Conditions</h2>
        ReelTrail’s Marketplace Service is the marketplace payment system that allows ReelTrail buyers to choose from all payment methods available on ReelTrail.com and ReelTrail mobile apps provided by ReelTrail’s payment processor(s). Users can pay by Visa, Debit cards, MasterCard, American Express, ReelTrail ReelPay, PayPal, and Venmo. Theses terms and conditions explain your rights and obligations when using ReelTrail Checkout Services.
        <ol>
          <li><h4><i>Overview</i></h4></li>           <ol type="a">
              <li>By using the ReelTrail’s Marketplace Service (“Checkout Cart”) on ReelTrail.com (the “Site”) as a seller ( “ Seller” or “you”), you agree to be bound by the terms and conditions of ReelTrail’s Marketplace Terms and Conditions Agreement (the “Agreement”). The Agreement is a legal agreement between you and ReelTrail and Reeltrail’s payment processor(s)[PP] (“ReelTrail PP” “we,” or “us”).</li> 			<li>In order to accept payments directly through the Site, sellers must register on ReelTrail/payment processors(s), used by ReelTrail, which is called our Marketplace Service. ReelTrail’s Marketplace Service allows sellers to accept authorized credit cards, debit card, Venmo, and PayPal transactions “PaymentTransactions”) to enable the user to allow purchases and to sell under the ReelTrail Platform and mobile app, then once a transaction takes place to have the sellers funds after all fees deposited to Seller’s Bank Checking Account. Buyers may authorize a PaymentTransaction with any major credit card, debit card, PayPal, or Venmo accepted by a payment processor used by ReelTrail.</li> 			<li>ReelTrail helps facilitate marketplace transactions. It is not the purchaser of any seller’s goods and it is not the agent of a buyer in a Payment Transaction. ReelTrail’s receipt of a payment through Marketplace Services is related to a transaction between a Seller and the relevant buyer and not ReelTrail or any of ReelTrail’s affiliates. ReelTrail provides a payment processing desktop platform and Mobile App for Sellers and it is not a party to any Payment Transaction. See ReelTrail’s general Terms &amp; Conditions for more information.</li> 			<li>Checkout Services is generally available seven (7) days per week, twenty-four (24) hours per day, except for scheduled downtime due to system maintenance.</li> 			<li>Checkout Services functionality may be made available, modified, or discontinued by ReelTrail’s payment processor(s) at any time without notice and is subject to the limitations in ReelTrail’s general Terms &amp; Conditions.</li> 			<li>As a security measure, ReelTrail’s payment processor(s) may, but are not required to, impose transaction limits on some or all buyers, and/or Sellers relating to the value of any transaction, deposit, or adjustment, the cumulative value of all transactions, deposits, or adjustments during a period of time, or the number of transactions per day or other period of time in accordance with Section 4c of this Agreement. ReelTrail and its payment processor(s) will not be liable to a seller;
                <ol type="i">
                  <li>(i.) If they do not proceed with a transaction, deposit, or adjustment that would exceed any limit established by them; or</li> 					<li>(ii.) If they permit a buyer to withdraw from a transaction to avoid exceeding a payment processor(s) established transaction limit.</li>
                </ol>
              </li> 			<li>A ReelTrail payment processor(s) may refuse service to anyone, for any reason, at any time.</li> 			<li>Sub-merchant acceptance of the following: ReelTrail uses Braintree, a division of PayPal, Inc. (Braintree) for payment processing. In order for you to use Braintree's payment processing services, you must read and agree to the Commercial Entity User Agreement (CEA) available at https://www.braintreepayments.com/legal/cea-wells and the Payment Services Agreement available at https://www.braintreepayments.com/legal/ gateway-agreement. By accepting this Agreement, you agree:
                <ol type="i">
                  <li>that you have downloaded or printed the CEA, and </li>
                  <li>that you have reviewed and agree to the CEA. If you have questions regarding the CEA or the PSA, please contact Braintree at 877.434.2894.</li>
                </ol>
              </li>           </ol>
          </ol>
          <li><h4><i>Payment Transactions</i></h4></li>
          ReelTrail’s payment processor(s) will serve to assist Seller in its Payment Transactions with a buyer. Buyers may authorize a Payment Transaction with any major credit card accepted by ReelTrail, PayPal, Venmo, a ReelTrail ReelPay, or any other form of payment approved by payment processor. For the purpose of completing Payment Transactions between you and a buyer, ReelTrail will maintain a direct contractual relationship with payment processor(s). ReelTrail has the right to have more that one payment processor and the payment processor(s), shall;           <ol type="a">
              <ol type="i">
                <li>receive funds from a buyer on your behalf, and convey instructions for the payment disbursements directly to the payment processor, and</li>
                <li>refund the buyer’s account from payment processor(s) bank settlement account for any reversal of the buyer’s original payment. You agree and acknowledge that any Payment Transactions by a buyer to ReelTrail’s payment processor(s) extinguishes any liability the buyer has to you regarding payment for the item in question.</li>
              </ol> 			<li>By registering with a ReelTrail Marketplace Services, Seller agrees to always comply with and to sell items in accordance with ReelTrail General Terms &amp; Conditions.</li> 			<li>The use of Marketplace Services must be solely for the sale of items listed on the Site. A Seller agrees to ship sold item(s) once the Payment Transaction is complete and reflected in his or her Bank checking account. ReelTrail reserves the right to terminate Seller’s access to Marketplace Services if Seller is determined to be using Marketplace Services for transfer of funds not related to the sale of items listed on the Site.</li> 			<li>ReelTrail payment processor(s) reserves the right to decline any Payment Transactions that we have reason to believe may be high risk, fraudulent, or in violation of this Agreement.</li> 			<li>ReelTrail/and or payment processor will bear the risk of credit card fraud (i.e. fraudulent purchase arising from the theft and unauthorized use of a third party’s credit card information) occurring in connection with Payment Transactions. In the event a Seller is indirectly or directly involved with and/or participates in any credit card fraud, ReelTrail will not be liable and you will be subject to indemnification obligations set forth in Section 6 of ReelTrail’s General Terms &amp; Conditions. In the event that a buyer changes a shipping address after payment funds have been cleared to the seller, ReelTrail cannot bear risk of fraudulent payments.</li> 			<li>ReelTrail’s payment processor(s) maintains records associated with Payment Transactions and does not pass any confidential data, including credit card numbers, to Sellers. Sellers will receive shipping information and limited buyer account information only as needed to complete the order. Use of this information is dictated by our Reeltrail Privacy Policy.</li>           </ol> 	<li><h4><i>Marketplace Payment Services</i></h4></li>
          Marketplace Services is available to Sellers and Buyers. Marketplace Services allows buyers and sellers to use various forms of payments on ReelTrial’s website, mobile apps, and other services. Prospective Sellers must provide personal information as requested by ReelTrail/and its Payment Processor(s) during registration, must provide ReelTrail/and its payment processor(s) true and accurate information, and must maintain and update that information as necessary. Prospective Sellers will not impersonate any person or use a name he or she is not legally authorized to use.
              <ol type="a">
              <li>Prospective Seller authorizes ReelTrail and payment processor(s) to verify his or her information (including any updated information) by accessing public records and to obtain credit report on prospective Seller in order to approve prospective Seller for use of the Checkout Services. Prospective Seller also authorizes us and our payment processor(s) to verify his or her information from time to time upon becoming a Seller in using Marketplace Services.</li> 			<li>ReelTrail and payment processor(s) reserves the right to conduct periodic reviews of Seller’s registration information and usage of Marketplace Services.</li> 			<li>A Seller will attempt to resolve any dispute directly with a buyer before seeking the assistance of the ReelTrail Customer Support Team. In the event of a dispute being escalated to ReelTrail’s Customer Involvement Group, ReelTrail reserves the right to issue a refund to the buyer if the disputed transaction is found to be in violation of ReelTrail’s general Terms &amp; Conditions. In the event of chargebacks submitted by a buyer, ReelTrail or payment processor(s) will respond to credit card networks on behalf of Seller; Seller agrees to provide any requested information to ReelTrail or payment processor(s) within five calendar days of the request. ReelTrail and payment processor(s) reserves the right to recoup funds associated with buyer chargebacks in accordance with Section 5 of this Agreement.</li> 			<li>ReelTrail and or payment processor(s) will inform Sellers of each Payment Transaction, and other information pertaining to Marketplace Services, using our standard communication procedures, including email or other messaging services associated with Checkout Services.</li> 			<li>Sellers may provide refunds or adjustments to buyers for their Payment Transactions made on ReelTrail’s platform by using the Reeltrail and or its payment processor(s) refund functionality accessible through their Marketplace Services. Funds to cover refunds will be deducted from Seller’s Marketplace Services balance/and or sellers checking account. In the event of insufficient funds to cover the amount of the refund, Seller’s credit card on file with payment processor(s) will be charged.</li> 			<li>Fully refunded Payment Transactions may be eligible for cancellation in accordance with the customer service guidelines outlined in ReelTrail’s HELP and/or ReelTrail’s payment processor(s) Terms and Conditions outlined when Sellers account is set up through a payment processor(s) Application in which Seller submits to payment processor.</li> 			<li>Sellers can access Payment Transaction information online in his or her Marketplace Services by payment processor(s). Sellers may access the Checkout Services only with a browser that is compatible with Checkout services, including any security features that are a part of Checkout Services.</li> 			<li>Fees for Sellers
              Subscription Service fees for Sellers are done through ReelTrail’s payment processor(s) and will be taken out monthly through an approved credit or debit card between a U.S. based Seller. The transaction fee will be deducted from the transaction amount as the funds become available for deposit on the total gross amount which includes tax, processing fee and shipping.</li> 			<b><i>ReelTrail Non-Subscription and Subscription Service fees.</i></b> 				<ol type="i">
                  <li>Credit/Debit Card: ReelTrail accepts <b>Visa, MasterCard, American Express, Discover, and Debit cards.</b> 						<ol style="list-style-type: none">
                      <li><b>Seller’s Non-Subscription Fee:</b>
                      (i.) Bronze Level - 7.5% transaction fee (flat rate fee, no monthly payment).
                      <b>Seller’s Subscription Fees:</b>
                      (i.) Silver Subscription - $19.00 per month, plus a 5.5% transaction fee on all Gross Sales.
                      (ii.) Gold Subscription - $39.00 per month, plus a 3.5% transaction fee on all Gross Sales.
                      (iii.) Also ReelTrail collects a payment processing fee for all seller fees other than Subscription Service monthly fees(Processing fee = 2.90% + $0.25)
                      <b>*ALL PAYMENT PROCESSING FEES ARE NON-REFUNDABLE ON REFUNDS.</b></li>
                    </ol>
                  </li>
                </ol>             <li>You are solely responsible</li> 			<ol type="i">
                <li>for determining what, if any, taxes or fees (“Taxes”) apply to your transactions. Also ReelTrail collects a payment processing fee for all seller fees other than Subscription Service monthly fees(Processing fee = 2.90 + $0.25).</li> 				<li>ReelTrail helps to assist buyers/sellers through the use of a Sales/Use Tax Api source called Taxify. that works on certain transactions resulting in collecting either a sales/use tax, being disbursed to the seller. The seller is required to pay the sales tax of the buyer in both a seller/buyer state(s) of nexus directly to the DOR.</li> 				<li>assessing, collecting, reporting, or remitting Taxes to the appropriate tax authority. When you provide us your tax identification number, you agree that we may send electronic reports of tax documents (including Form 1099-K) to you. We are not obligated to nor will we determine the applicability of any Taxes, or calculate, collect, report, or remit any taxes to any tax authority arising from any Transaction, but we may withhold any amounts that we deem appropriate to cover such Taxes if we cannot validate any tax identification number you provide us. We may send documents to you and tax authorities for Transactions processed using the Services. Specifically, pursuant to the Internal Revenue Code, we may be required to file an informational return with the IRS reporting Transactions and third-party network transactions with legal entities or persons that occur in a given calendar year. If you use ReelTrail Payment Services, you acknowledge that ReelTrail/ReelTrail Payment processor(s) will report the total amount of payments you receive each calendar year as required by the Internal Revenue Service.</li> 				<li>For U.S. Sellers, Internal Revenue Service (“IRS”) regulations require that U.S. third-party settlement organizations and payment processors, file Form 1099- K to report unadjusted annual gross sales information for sellers that meet both of the following thresholds in a calendar year (reporting):
                  <ol type="1">
                    <li>More than $20,000 in gross sales, and</li>
                    <li>More than 200 transactions.</li>
                  </ol>
                </li>
              </ol> 		</ol> 	As a result of these regulations, Sellers who approach one hundred and seventy-five (175) transactions in a calendar year, regardless of sales volume and aggregated across his or her ReelTrail selling account, will be required by ReelTrail to provide taxpayer- identification information and will be notified via email and through other communication channels available on the Site.
          <li><h4><i>Deposits</i></h4></li>
          All funds resulting from a completed Payment Transaction will be disbursed in Seller’s checking account and or Venmo account through Marketplace Services. Payment Transactions are considered complete once the payment is approved by ReelTrail’s payment processor(s). If a Seller’s first sale date is less than ninety (90) days from the day the Seller registers for Marketplace Services, Payment Transaction completion also requires that the sold item is marked as “shipped” using the tools made available in Seller’s Marketplace Services. Any refunds, adjustments, or other amounts paid to buyers in connection with purchases, or for funds received since the last Payment transaction Date, as defined in Section 4b, are also applied to Seller’s Checkout Services balance. Funds in a Marketplace Services are deposited immediately after payment transaction into Seller’s Bank Checking Account at the end of each transaction.
              <ol type="a">
              <li>Upon Seller’s election of payment by credit card or debit card ReelTrail’s payment processor(s) will initiate the payment transaction and disbursing the net amount into Seller’s Bank Checking Account after each payment transaction. Each Payment transaction disbursement will fall on standard Sunday through Sunday with the possible exclusion of US national and/or bank holidays.

              <li>If we reasonably conclude, based on information available to us, that a Seller’s actions and/or performance in connection with Marketplace Services may result in buyer disputes, chargebacks, or other claims, then the ReelTrail and its payment processor(s) may, in its sole discretion, put into effect a hold, deposit delay, or reserve associated with Seller’s Checking Account. A hold may be put on funds associated with a particular Payment Transaction in the event of disputes or investigations associated with the order for the shorter of:
              <ol type="i">
              <li>180 days after the estimated delivery date; or</li> 			<li>completion of any investigation(s) regarding any Sellers actions and/or performance in connection with the Payment Transaction. Deposit delays are defined as the number of days between a sale and the day the net amount from the sale becomes available for deposit, provided the payment has been completed as described in Section 4a. A deposit delay may be between 0 and 180 days. A deposit delay is applied across all Payment Transactions for Seller. A reserve is defined as a fixed percentage of Seller’s checking account and or credit card balance being frozen by Reeltrail’s payment processor. All holds, deposit delays, and reserves will be communicated to Seller by ReelTrail’s payment processor(s) and will email Seller or some other type of notification through the ReelTrail Site. ReelTrail and its payment processor(s) will not be liable to a Seller if they act in accordance with the provisions of this Section [4].</li> 			<li>In the event funds designated for cash payment cannot be deposited into Seller’s Bank Checking Account, the funds will be deposited into the Venmo Account. Seller will be required to update his or her Bank Checking Account information and such funds will automatically be transferred to Seller’s new Bank Checking Account within 7 business days.</li>            </ol>
          </li>
          </ol> 	<li><h4><i>Recoupment</i></h4></li>           <ol type="a">
              <li>ReelTrail and or its payment processor(s) reserve the right to seek reimbursement from a Seller if we, in our sole discretion, provide a refund to a buyer if Seller cannot promptly deliver the goods, or if we discover erroneous or duplicate transactions, receive a chargeback from buyer’s credit card issuer for the amount of buyer’s purchase from Seller, or Seller otherwise does not act in accordance with ReelTrail’s general Terms &amp; Conditions.</li> 			<li>ReelTrail and or ReelTrail’s payment processor(s) may obtain reimbursement of any amounts owed by Seller to ReelTrail and or ReelTrail’s payment processor(s) under Section 5a or otherwise by deducting the amounts owed from future payments owed to Seller, charging Seller’s credit card on file, or seeking such reimbursement from Seller by any other lawful means, including collections. You authorize ReelTrail and or ReelTrail’s payment processor(s) to use any or all of the foregoing methods to seek reimbursement, including the charging of your credit card.</li>            </ol> 	<li><h4><i>Notice</i></h4></li>           <ol type="a">
              <li>All notices will be sent by email or will be posted on the Site or by any other means specified by ReelTrail or its payment processor(s). We will send notices to a Seller at the email address maintained in ReelTrail’s records for such Seller. A Seller will monitor his or her email messages frequently to ensure awareness of any notices sent by us and otherwise agrees to the notification clause in ReelTrail’s general Terms &amp; Conditions.</li>
              <li>Sellers will send notices to us using the functionality for contacting ReelTrail provided in our HELP section.</li>           </ol> 	<li><h4><i>Termination</i></h4></li>            <ol type="a">
              <li>ReelTrail’s payment processor(s) may terminate a Seller’s use of Marketplace Services without notice to Seller for any reason. Upon termination, any non-disputed available balance resulting from a Payment Transaction will be deposited into Seller’s Bank Checking Account and Seller will still have access to his or her Marketplace Services for at least 10 days following termination. ReelTrail and or its payment processor(s) reserve the right, upon termination of access to the Marketplace Service, to set off against any payments to be made to Seller, an amount determined by ReelTrail or its payment processor to be adequate to cover any anticipated chargebacks, refunds, adjustments or other amounts paid to buyers in connection with purchases from Seller’s Marketplace Service for a prospective 180-day period. </li> 			<li>At the end of such 180-day period following termination, ReelTrail or its payment processor will disburse to Seller any amount not used to offset chargebacks, refunds, adjustments, or such other amounts paid to buyers, or seek reimbursement from Seller via any of the means authorized in Section 5 above for any additional amount required to offset chargebacks, refunds, adjustments, or other amounts paid to buyers, as applicable. Refer to ReelTrail’s general Terms &amp; Conditions for additional information regarding a termination.</li>
            </ol> ReelTrail reserves the right to alter these policies at any time. Updated August 2018
            <h2>ReelTrail Refund-Guarantee Terms &amp; Conditions</h2> We hope your experience on ReelTrail is always a great one. But we recognize that sometimes things get can crazy. In the unlikely event that a problem with your order arises, we highly recommend contacting the seller as soon as possible. If the issue cannot be resolved with the seller, contact us immediately. Whether you pay with a debit card, credit card, or PayPal, you’re protected from any scams, faulty, or falsely advertised items.
        <ol>
          <li><h4><i>The Process</i></h4>
            <ol type="a">
              <li>The buyer should fill out the Claims Form or contact ReelTrail support at support@reeltrail.com immediately and describe the situation with in-depth details on what has happened. Communication must be made within 7 days of receiving the item where applicable.</li>
              <li>ReelTrail will review the sale and communicate with the seller in order to reach resolution in accordance with their store policies and expectations.</li>
              <li>If no resolution is reached, ReelTrail will recommend the next step the buyer should take depending on the method of payment used. If payment is made through PayPal, we would recommend for you to file a PayPal dispute process and provide any materials needed to ensure the dispute reaches the correct end. If the sale is completed through ReelTrail’s Checkout Payment system, ReelTrail will issue a refund direct to the buyer's credit card once it has been established that no other agreeable resolution has been reached with the seller.</li>
              <li>ReelTrail will provide documentation to payment institutions in situations deemed appropriate. This is left to the sole discretion of the ReelTrail staff.</li>           </ol>
          </li>
          <li><i>ReelTrail HIGHLY recommends not refunding any item, until the item is physically returned to the seller. You are not eligible for a Refund when, you as the buyer, had arranged shipping or pickup of the items; and the items were damaged during pickup or shipping. You will need to file a shipping claim with the carrier used.</i></li>
        </ol> ReelTrail reserves the right to alter these policies at any time. Updated August 2018
        </div>
      </div>`;
  constructor(private rt: RtProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.rt.getPage('terms-condition').then((page: any) => {
      if (page && page.pageHtml) {
        this.seoContent = page.pageHtml;
      }
    }, err => {

    });
  }

}
