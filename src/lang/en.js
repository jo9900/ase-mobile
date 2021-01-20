const message = {
    //btn
    1: "Home",
    2: "Personal Center",
    3: "News",
    4: "White Paper",
    5: "Release Plan",
    6: "Pre-sale",
    7: "About Us",
    8: "Language",
    9: "Exit",
    //首页-----------------------
    10: "Login",
    11: "Register",
    12: "High-speed, safe and credible decentralized cross-chain",
    13: "Underlying system of the digital asset trading platform",
    14: "Quickly built applications such as decentralized exchanges",
    15: "Register Now",
    16: "AECO's first round of pre-sale start",
    17: "Deposit in USDT for AECO rewards",
    18: "Start Time:",
    19: "End Time:",
    20: "Buy Now",
    21: "The first decentralized exchange application created on",
    22: "About ARTHUR-EX",
    23: "ARTHUR-EX is a high-speed, safe, and credible decentralized cross-chain digital asset trading platform underlying system, and a one-stop solution provider for digital asset exchanges. Through its proprietary high-performance cross-chain transaction protocol Arthur-Swap, it supports more than 20 public chains, including BTC, TAF, and ETH, and fast transactions of tokens on the chain. As a new-generation trading platform using Peer-to-Peer technology, its operation, security, settlement and fees are more transparent than the current centralized digital asset trading model.",
    24: "ARTHUR-EX is committed to creating a new-generation innovative digital asset trading platform underlying system, and fully leading the decentralized exchange into a new stage of development.",
    25: "Core Technology Advantages",
    26: "Shared Liquidity",
    27: "ARTHUR-EX is supported by ArthurAPI. ArthurAPI is an open framework with a shared liquidity pool that can build decentralized exchanges for the future. All products using the ArtherAPI framework share a unified liquidity pool." ,
    28: "High-Speed Cross-Chain Technology",
    29: "The proprietary high-performance cross-chain transaction protocol Arthur-Swap is cross-chain direct transaction implemented by smart contracts. Based on the industry's most advanced peer-to-peer mobile-first atomic exchange protocol, it allows you to trade between any digital currencies without first sending your assets to the exchange. You always have full control over digital assets. ",
    30: "Various Crypto Assets",
    31: "Support the same-chain or cross-chain transactions of common public chain currencies, such as Bitcoin, all UTXO-based digital currencies, ETH, ERC-20 tokens, and any digital currency that supports time lock and hash lock payments.",
    32: "About ARTHUR Settlement Center",
    33: "The Arthur Settlement Center is the core settlement platform of the first exchange alliance on ARTHUR-EX. The platform is a decentralized organization jointly initiated by a number of exchange agencies, regulatory agencies, settlement agencies, etc. The code is open source on github. As the token of the infrastructure platform, AECO can be used not only in digital currency exchanges, but also in exchange alliances. It is a trading hub of digital assets and a value router in the era of digital economy. ",
    34: "AECO will achieve complete decentralization. Listing, trading and asset access are all managed by smart contracts, without human intervention. All transaction records are recorded on the chain ledger of the settlement center, open, transparent, traceable and non-tamperable. This subverts traditional stock exchanges (Nasdaq, NYSE) and traditional digital currency centralized exchanges (Huobi, Binance). ",
    35: "Release Plan",
    36: "AECO Distribution Plan",
    37: "Asset Name",
    38: "Total Issued",
    39: "1.5 billion, with an initial launch of 30 million. The subscription will start in January 2021. The first round of funds raised will be used for the development and expansion of the ARTHUR-EX platform",
    40: "Token Circulation",
    41: "Cross-chain settlement transactions, liquidity mining, exchange platform rewards, mortgage lending, lock-up and reduction of handling fees, etc.",
    42: "Download Space",
    43: "App",
    44: "Apple App",
    45: "White Paper",
    46: "Enable Subscription",
    47: "Get the latest ARTHUR-EX information",
    48: "Enter your email address",
    49: "Subscribe Now",
    50: "Contact Us",
    51: "Business Email:",
    52: "Address:",
    53: "UAE Middle East XXX Building",
    54: "OK",
    55: "Cancel",
    56: "Language",
    57: "Early Investment",
    58: "Private Investment",
    59: "Infrastructure Construction",
    60: "Others",
    61: "Ecological Expansion",
    62: "Trading Platform Incentive",
    63: "Developer Incentive",
    // Login-----------------------
    64: "Enter your account number",
    65: "Enter your password",
    66: "Forgot your password?",
    67: "No account?",
    68: "Enter your email address",
    69: "Enter the verification code",
    70: "Get verification code",
    71: "Enter password again",
    72: "Enter the invitation code (optional)",
    73: "I have read and agree",
    74: "User Agreement",
    75: "Already have an account? ",
    76: "Log in now",
    77: "Forgot password",
    78: "Reset Now",
    79: "Incorrect email address format",
    80: "A combination of 8-30 letters and digits",
    81: "Verification code has been sent",
    82: "Failed to obtain verification code",
    83: "Too frequent attempts to obtain verification code",
    84: "Account registered successfully",
    85: "Incorrect verification code",
    86: "Invalid verification code",
    87: "The user name already exists",
    88: "Logged in successfully",
    89: "Incorrect account or password. Please enter again",
    90: "Inconsistent passwords",
    91: "Changed successfully",


    // 个人中心-----------------------
    92: "Personal Center",
    93: "My Assets",
    94: "AECO Assets:",
    95: "Personal Information",
    96: "Name:",
    97: "Not certified",
    98: "Country/Region:",
    99: "ID Card",
    100: "KYC certification",
    101: "Certified",
    102: "Under review",
    103: "Failed",
    104: "Failed to pass the review",
    105: "Perform identity authentication first; otherwise, and platform usage is restricted. ",
    106: "My Purchase",
    107: "Subscription Fund",
    108: "Subscription Quota",
    109: "My Invitation",
    110: "Invitation Rules",
    111: "Accumulated Rebate",
    112: "Promote Users",
    113: "People",
    114: "Invitation QR Code",
    115: "View QR Code",
    116: "Invitation QR code to promote on your social media",
    117: "The system allocates promotion codes after purchase",
    118: "The system allocates promotion links after purchase",
    119: "Copied successfully",
    120: "Change",
    121: "Login Password",
    122: "Binding Mailbox",
    123: "Account ID",
    124: "Security Settings",
    125: "Login Records",
    126: "View",
    127: "Subscription Records",
    128: "Subscription Fund",
    129: "Subscription Quota",
    130: "Subscription Amount",
    131: "Phase",
    132: "First Round of Pre-sale",
    133: "Second round of pre-sale",
    134: "Order Time",
    135: "Confirm Time",
    136: "No data yet",
    137: "View more",
    138: "No more",
    139: "Loading...",
    140: "Promotion User",
    141: "Time",
    142: "User",
    143: "Secondary Invitees",
    144: "Authentication Result",

    // 预售
    145: "Pre-sale",
    146: "AECO Pre-sale Plan",
    147: "Start Time: ",
    148: "Unit Price: ",
    149: "Target Amount: ",
    150: "3,600,000",
    151: "TAF public chain goes online",
    152: "15 million",
    153: "Confirmation of Inquiry Before Insurance",
    154: "200 million",
    155: "Subscription Rules and Statement",
    156: "Dear Subscriber:",
    157: "1. Before the first purchase, register on the ARTHUR-EX official website and perform real-name authentication.",
    158: "2. This round of pre-sale only accepts USDT (omni) payment. Before subscription, prepare a full amount of USDT (omni).",
    159: "3. After the payment, blockchain confirmation will take some time. After the confirmation, AECO will automatically recharge to your trading account. Please wait patiently.",
    160: "4. Each user can get the invitation code and invitation link after subscribing.",

    161: "5. After you send the invitation link/invitation code to your friend, if your friend registers an account and completes the purchase, you can get invitation rewards. In addition, if your friend invites others to participate, you will also get rewards after the purchase.",
    162: "6. The reward will be issued to your trading account in the form of USDT. The default reward ratio is 8% for the first level invitation and 2% for the second level invitation.",

    163: "7. The invitation rewards are only for the event rewards during the pre-sale period. After the pre-sale ends, the invitation rewards will no longer take effect.",

    164: "8. For any questions about the rules, contact the customer service personnel on the official website for professional support",

    165: "AECO is an important digital value circulating in the platform ecology, instead of an investment product. Owning AECO does not mean owning the public chain platform's ownership, control, and decision-making power.",

    166: "Whether AECO is value-added depends on the market rules and the demand after the application of the ecosystem, and it may not have any value. The team does not make a commitment to its value added, and is not responsible for the consequences caused by the increase or decrease in value.",

    167: "First round not started",
    168: "Buy Now",
    169: "Waiting for the next round of pre-sale",

    170: "Ended",
    171: "Global pre-sale to start",
    172: "Second round of panic purchases",
    173: "Purchased",
    174: "items",
    175: "Pre-sale Progress",
    176: "Total",
    177: "Number of Purchased Items",
    178: "Quantity of Purchases",
    179: "Minimum 1 item",
    180: "Minimum 100, an integral multiple of 100",
    181: "Payment Required",
    182: "I have read and confirmed",
    183: "Subscription Rules and Statement",
    184: "Next",
    185: "Please make sure that the amount received at this address is accurate. When paying on a third-party platform, pay the service fee by yourself",
    186: "Payment",
    187: "Your independent USDT payment address (omni)",
    188: "Copy",
    189: "Scan QR Code",
    190: "Confirm and Pay",
    191: "Login Reminder",
    192: "Only login users can participate in the pre-sale",
    193: "Login",
    194: "Cancel",
    195: "Pass KYC authentication before purchase",
    196: "Authentication",
    197: "Enter the number of items",
    198: "Enter the quantity",
    199: "Minimum 1 item",
    200: "It shall be an integer",
    201: "Enter an integer multiple of 100, such as 100, 200, 300",
    202: "It cannot exceed the maximum allowed value",
    203: "It cannot exceed the maximum allowed value",
    204: "The second round is over",
    205: "Incorrect address",
    206: "Subscription error",
    207: "No invitation link",
    208: "Login Record",
    209: "Login Time",
    210: "IP Address",
    211: "Login Method",
    212: "Unknown",
    213: "Subscribed successfully",
    214: "Not online yet. Please wait patiently",

    215: "The white paper has not been published yet. Please wait patiently!",
    216: "Country/Region",
    217: "Select a country/region",

    218: "Last Name",
    219: "Name",
    220: "Certificate Type",

    221: "Select a certificate type",
    222: "Certificate Number",
    223: "ID Number",
    224: "Driver's License Number",
    225: "Passport Number",
    226: "Identity Proof Document",
    227: "Front",
    228: "Back",
    229: "1. The photo shall be clear without any modification or obstruction",
    230: "2. The file is in JPG or PNG format, less than 2M",
    231: "Date of Birth",
    232: "Select Date",
    233: "Mobile Number",
    234: "Fill in a mobile number",
    235: "Finish",
    236: "Submit",
    237: "Mandatory",
    238: "Driver's License",
    239: "Passport",
    240: "Submitted successfully! The information is being reviewed",
    241: "Failed to submit",
    242: "Audit failed",
    243: "Refill",
    244: "Enter an email verification code",
    245: "Total Rebate",
    246: "Friend Level",
    247: "Level 1 Friends",
    248: "Level 2 Friends",
    249: "Rebate Amount",
    250: "ARTHUR-EX Press and Promotional Materials",
    251: "Thank you for your interest in ARTHUR-EX materials",
    252: "We hope these materials are useful",
    253: "For any questions",
    254: "please feel free to contact us at aeco@arthurex.com",
    255: "ARTHUR-EX Logo Package",
    256: "Download Now",
    257: "About Us",
    258: "Latest News",
    259: "Invitation Rules",
    260: "1. Each user can get the invitation code and invitation link only after successful subscription.",
    261: "5. After you send the invitation link/invitation code to your friend, if your friend registers an account and completes the purchase, you can get invitation rewards. In addition, if your friend invites others to participate, you will also get rewards after the purchase.",
    262: "6. The reward will be issued to your trading account in the form of USDT. The default reward ratio is 8% for the first level invitation and 2% for the second level invitation.",
    263: "7. The invitation rewards are only for the event rewards during the pre-sale period. After the pre-sale ends, the invitation rewards will no longer take effect.",

    //认购规则和声明n
    264: "Subscription Rules and Statement",
    265: "Your Excellencies",
    266: "Welcome to participate in the subscription activity of AECO issued by \"ARTHUR-EX\"",
    267: "Carefully read these rules and statements and the general content of the white paper on this website. Before taking any subscription action, you shall consult your legal, financial, tax and other professional advisors. The rules and statements and white paper introduce to potential buyers ARTHUR-EX TECHNOLOGY DEVELOPMENT LTD. (a limited liability company established under the laws of BVI) and its limited liability companies established by the Swiss Confederation and Abu Dhabi ADGM (the \"issuer\") the information about the company's proposed issuance and sale (collectively referred to as the \"sale\") of encrypted equity tokens marked with the symbol \"AECO\". ",
    268: "Subscription Rules",
    269: "1. The only legally designated official address for this sale is: https://www.arthurex.com",
    270: "2. During the sale period, after completing the website registration and passing the issuer's identity identification and verification to meet the subscription qualifications, the intended subscriber can subscribe in accordance with the prescribed subscription procedures. The subscription quantity for a single person shall not be less than 20,000 AECO, and the total amount shall not exceed 1,500. This subscription is automatically terminated after the sale. ",
    271: "3. This subscription supports subscription through USDT payment. The subscriber shall complete the subscription by pre-paying the corresponding amount of USDT on the designated sale official website. For the specific subscription process, see the procedures specified on the official website. ",
    272: "4. After the subscriber completes the payment and the seller confirms that the subscription is successful, the subscriber will obtain the corresponding amount and value of AECO through the digital account registered and allocated on the designated official website of the seller. The acquired AECO will be temporarily locked, and can be withdrawn after the mainnet goes online and the lock-up period ends. The specific unlocking plan will be confirmed in the official white paper provided during the subsequent global public sale. ",
    273: "5. If you invite your friends to participate in the subscription during this sale, when your friends successfully subscribe, you will enjoy a reward of 8% of the sum of the invited friends' successful subscription. If your friend invites another friend again, you will get a reward of 2% of the successful subscription amount of the invited friend. The reward will be given with the equivalent amount of AECO determined at the price of this sale, and will be paid to the inviter's account registered on the official website designated by the seller on the day the invited friend successfully subscribes. After the lock-up period expires, you can trade automatically.",
    274: "6. 75% of the funds raised from this sale will be used for the technical iteration development costs of the ARTHUR-EX platform; 15% will be used for related legal affairs, auditing and public governance fees for the platform's global offering in 2021 that meet regulatory requirements; 10% will be used for the promotion and necessary operating expenses of the global sale in 2021.",
    275: "7. The official website documents such as the rules, statements, white papers and user agreements of this sale are contractually binding on the subscribers who have successfully registered for this sale and are confirmed to be eligible for subscription. Any subscriber who violates the selling rules, declarations or legally binding regulations announced by the seller shall bear legal responsibility. The seller shall reserve the right to take legal actions including but not limited to suspension/termination of subscription, freezing, confiscation of the AECO that has been subscribed, increase of the selling price, cancellation of subscription qualification, and compensation for losses based on factors such as the severity of the subscriber's violation of the regulations and the consequences of damage caused. action. The subscriber agrees and promises to waive the seller's right to take legal measures to counterclaim, refuse to execute, and defend against this. ",
    276: "8. For any problems in the subscription, please feel free to contact customer service aeco@arthurex.com.",
    277: "Legal Statement",
    278: "The provision of the token is only based on the information contained on this website and the white paper and the terms and conditions applicable to the purchase of the pass. These terms and conditions are available at the designated official website of this sale. In the case of any inconsistency between the terms and conditions and this white paper, the terms and conditions shall prevail. Potential buyers shall ignore and shall not rely on any other information or statements given or made by any dealer, broker or other entity. Except for the information contained in this white paper and the terms and conditions of the transaction, no one shall have the right to provide any information or make any statement regarding this token issuance. Potential buyers who have received or made such information or statements shall not rely on such information or statements to obtain a license or authorization to decide the purchase of a token. ",
    279: "The statements on this website and in the white paper are based on the current laws and practices of the BVI, the Swiss Confederation and Abu Dhabi ADGM on the date of the white paper. Therefore, if laws or practices change, these statements may change. In any case, the payment for the content recorded on this website and the white paper or the sale of the token does not mean that the corresponding statement will not changed since the signing date of this white paper. ",

    280: "2. Buyer Liability",
    281: "Any content contained on this website and the white paper shall not be used as any potential economic return or purchase proceeds of the issued token to make any type of statement or guarantee. Potential buyers shall read the whole white paper carefully. They shall also consult their legal, tax and financial advisors on the following matters: (1) Legal and regulatory requirements for the purchase, holding and disposal of tokens in their own country; (2) Any foreign exchange restrictions that may be imposed on the purchase, holding and disposal of tokens in their own country; (3) and (3) Legal, taxation, financial and other consequences arising from the subscription, purchase, holding and disposal of tokens. Within the maximum amount permitted by the applicable law of the issuer’s location, the issuer, any related parties, directors, managers, employees, shareholders and licensors of the issuer expressly denies that they shall not be liable for the following: (I) The buyer accepts or relies on any information contained in this white paper, (Ii) Any errors, omissions or inaccuracies in any such information, or (iii) Any direct or any indirect, special, incidental, consequential or any other loss of any kind caused by any action resulting from tort, contract or other aspects (Including but not limited to loss of income, revenue or profit, and loss of use or data). ",
    282: "The purchase of tokens is highly speculative, risky and uncertain. This token sale is intended only for people with sufficient knowledge and understanding of blockchain and cryptographic tokens and other digital assets, smart contracts, blockchain-based software systems (such as digital or digital wallets) storage mechanisms, blockchain or distributed ledger technologies, so that they can evaluate the risks and benefits of purchasing the tokens issued this time and bear the corresponding risks, including the loss of the payment and the loss of the purchased tokens. After conducting necessary investigations on the purchase value and applicability of the tokens for this sale, potential buyers shall further independently evaluate them, consult their accounting, legal and tax representatives and consultants, and evaluate the economic, legal and tax consequences of the purchase. ",
    283: "3. No registration",
    284: "No regulatory agency has reviewed or approved any information contained in this white paper. There are no such actions that have been or will be taken in accordance with the laws, regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of this white paper does not imply that any such applicable laws, regulatory requirements or rules have been complied with. ",
    285: "4. Distribution and sales restrictions",
    286: "The issuance of this white paper and the sale or purchase of tokens may be restricted in certain jurisdictions. Neither this white paper nor the token shall be eligible for sale, sale or distribution under the laws of any jurisdiction governing the issuance or sale of securities. The receipt of this white paper and its accompanying terms and conditions shall not constitute an invitation to the recipient to subscribe for the token in a jurisdiction where certain registration or other legal requirements are required to be complied with to issue the invitation or legally use the terms and conditions. Any such recipient shall not regard this white paper or the accompanying terms and conditions as an invitation to subscribe for tokens, nor shall they use the terms and conditions. More specifically, this white paper shall not constitute an offer or request: ",
    287: "In jurisdictions where such offers or solicitations are illegal or the subject making such offers or solicitations are not qualified, any subject may terminate this agreement; or make such an offer or solicitation to any person whose offer or solicitation is illegal. Everyone who owns this white paper and everyone who wants to apply for a token has the responsibility to inform themselves and to comply with all applicable laws and regulations in any relevant jurisdiction. ",
    288: "5. Securities issuance exemption",
    289: "Nothing in this document shall be deemed to constitute any kind of prospectus or investment invitation, nor shall it involve in any way any offer or invitation to purchase any securities in any jurisdiction. The information in this document does not constitute a recommendation by any subject to purchase the issued token, and the issuer has not authorized any subject to make any such recommendation. ",
    290: "6. Restricted purchase subject",
    291: "Every buyer of this token sale will be required to state that it is not: (a) Located or domiciled in (i) the United States (including a U.S. subject organized or owned under the U.S. Securities Act of 1933 (and its amendments), (ii) Canada, (iii) Any jurisdiction classified by the Financial Action Task Force as high risk or strategically flawed, (iv) Citizens and residents (tax or other) of Cuba, the Democratic People’s Republic of Korea (Democratic People’s Republic of Korea), Iran, Pakistan, Syria, Venezuelan government or Crimea subject, or any entity formed or owned by certain entities, or (V) Any jurisdiction in which the sale of this token or any offer or solicitation regarding the sale requires that the issuer is not registered or licensed or is otherwise illegal or restricts or permits the kind of activities that can be contacted or used with this token, or (b) Subjects under the age of 18 (any such entities under items (a) and (b) are referred to as \"restricted subjects\"). In addition, each buyer of this token shall be required to state, the buyer shall not be in the United States when agreeing to purchase the token, the buyer shall not be in the United States when reviewing any offer to sell or purchase the token, and the buyer shall not be in the United States at any time when fulfilling its obligations under the token purchase agreement. Therefore, you shall assess your ability to purchase tokens in accordance with the laws applicable to you and confirm that you are not a restricted person. In any country or jurisdiction that requires registration or other actions, no registration or other actions that allow or are intended to allow the sale of tokens have not been taken or will not be taken. Neither the issuer nor any of their respective agents or representatives has made any representations to any potential purchasers regarding the legality of the purchaser's purchase of the token under the law applicable to the purchaser. ",

    292: "7. Others",
    293: "The offering documents and white papers are available only to selected persons, and not through any general bidding or general advertising. You shall not and shall not have the right to deliver or disclose the contents of this document to anyone else. No subject shall have the right to provide or make any information or statement not contained in this white paper or the token purchase agreement. No subject or entity other than the issuer is authorized to sell, resell, or distribute the tokens on behalf of the issuer. ",
    294: "8. Right of Interpretation",
    295: "The final interpretation right belongs to the issuer.",
    296: "Release Plan",
    297: "Incorrect password. Please try again",
    298: "Invitation Code",
    299: "Invitation Link",
    300: "Incorrect picture size. Please re-upload",
    301: "Incorrect picture format. Please re-upload",
    302: "Failed to reset the password",
    303: "The old and new passwords cannot be the same",
    304: "Incorrect verification code",
    305: "Verification code expired",
    306: "User Agreement",

    307: "ARTHUR-EX is the high-speed, secure, and credible underlying system of a decentralized cross-chain digital asset trading platform developed by ARTHUR-EX TECHNOLOGY DEVELOPMENT LTD. (a company incorporated under the Swiss Confederation and ADGM laws in Abu Dhabi). The company operates a website https://www.arthurex.com (hereinafter referred to as \"this website\" or \"website\"). For the convenience of the expression of this agreement, the company and the website collectively use \"we\" or other first-person address in this agreement. As long as the natural persons or other subjects who log in to the website are users of this website, \"you\" or other second-person pronouns are used below for the convenience of the expression in this agreement. For the convenience of the expression of this agreement, we and you are collectively referred to as the \"parties\" in this agreement, and we or you are solely referred to as the \"party\". All contents on this website may be provided in multiple languages for the convenience of users. In case of conflicts or omissions, the English content shall prevail. ",
    308: "Important Notice",
    309: "We hereby remind you:",
    310: "1. The digital asset market is new, unconfirmed, and may not grow;",
    311: "2. Digital asset transactions are extremely risky because of uninterrupted transactions throughout the day, no limit on fluctuations, and prices susceptible to large fluctuations due to the influence of market makers and global government policies;",
    312: "3. If the company believes that you have violated this agreement based on its sole judgment, or the services provided by this website or your use of the services provided by this website are illegal according to the laws of your jurisdiction, the company shall have the right to suspend or terminate your account or suspend or terminate your use of the services or digital asset transactions provided by this website at any time. ",
    313: "4. Digital asset trading has extremely high risks and is unsuitable for most people. You understand that this transaction may cause partial or total loss, so you shall determine the amount of the transaction based on the degree of loss that you can bear. You understand that digital assets will generate derivative risks, so if you have any questions, it is recommended to seek professional advice first. In addition, in addition to the risks mentioned above, there will be unpredictable risks. You shall carefully consider and use clear judgment to assess your financial situation and the aforementioned risks before making any decision to buy or sell digital assets, and bear all the losses arising therefrom. We shall not be liable for this. ",
    314: "Please be notified:",
    315: "1. Any opinions, news, discussions, analysis, prices, suggestions and other information on this website are general market comments and do not constitute investment advice. We shall not be liable for any losses arising directly or indirectly from relying on this information, including but not limited to any loss of profits. ",
    316: "2. The content of this website shall be changed at any time without notice. We have taken reasonable measures to ensure the accuracy of the website information. However, we shall not guarantee its accuracy, and shall not be liable for any direct or indirect losses arising from the delay or failure of the information on this website or the failure to link to the Internet, transmit or receive any notices and information. ",
    317: "3. There are risks associated with the use of Internet-based trading systems, including but not limited to the failure of software, hardware, and Internet links. Since we cannot control the reliability and availability of the Internet, we shall not be liable for distortions, delays, and link failures. ",
    318: "4. https://www.arthurex.com is the only official platform for publishing external information on this website;",
    319: "5. It is prohibited to use this website to engage in money laundering, smuggling, commercial bribery and other illegal transactions or illegal activities. If any suspected illegal transactions or illegal activities are detected, this website will adopt all kinds of available methods, including but not limited to freezing accounts and notifying relevant authorities. We shall not assume any responsibility arising therefrom and shall reserve the right to hold relevant parties accountable.",
    320: "6. It is prohibited to use this website to conduct malicious market manipulation, improper transactions and other unethical trading activities. If such incidents are discovered, this website shall take preventive protective measures such as warnings, restricting transactions, and closing accounts for all unethical behaviors such as malicious price manipulation and malicious influence on the trading system. We shall not assume any responsibility arising therefrom and shall reserve the right to hold relevant parties accountable. ",
    321: "I. General Provisions",

    322: "1.1 User Agreement (hereinafter referred to as \"this agreement\" or \"the terms and conditions\") consists of the main text, Privacy Policy, Know Your Customer and Anti-Money Laundering Policy, and various rules, statements, instructions, etc. that have been published on this website or may be published in the future. ",

    323: "1.2 You shall read this agreement carefully before using the services provided on this website. For any incomprehension or other necessity, consult a professional lawyer. If you do not agree to this agreement and/or its modifications at any time, you shall immediately stop using the services provided by this website or stop logging in to this website. Once you log in to this website, use any service of this website or any other similar behavior, you have understood and fully agreed to the contents of this agreement, including any modification of this agreement made by this website at any time. ",

    324: "1.3 You can become a member of this website (hereinafter referred to as \"member\") by filling in relevant information according to the requirements of this website and successfully registering through other relevant procedures. If you click the \"Agree\" button during the registration process, you shall have reached an agreement with the company in the form of electronic signature; or if you click on any button marked with \"Agree\" or similar meaning during the use of this website or actually use the services provided by this website in other ways permitted by this website, you shall have fully understood, agreed and accepted all the terms and conditions under this agreement. The absence of your handwritten signature does not affect the legal binding force of this agreement on you. ",

    325: "1.4 After you become a member of this website, you will get a member account and corresponding password. You shall be responsible for keeping the member account and password; you shall be legally responsible for all activities and events conducted with your account. ",
    326: "1.5 Only members of this website can use the digital asset trading platform provided by this website to conduct transactions and enjoy other services that are available only to members as stipulated by this website; non-members can only log in to the website and browse the website and other services that are available on this website. ",

    327: "1.6 By registering and using any services and functions provided by this website, you shall be deemed to have read, understood and:",

    328: "1.6.1 I accept all terms and conditions of this agreement.",

    329: "1.6.2 You confirm that you have reached the age of 16 or have the legal age to conclude a contract according to different applicable laws. Your registration, sale or purchase, release of information on this website, etc. to accept the services of this website shall comply with relevant laws and regulations of sovereign countries or regions that have jurisdiction over you. And you shall have sufficient ability to accept these terms, enter into transactions, and use this website for digital asset transactions. ",

    330: "1.6.3 You shall ensure that the digital assets belonging to you involved in the transaction are legally acquired and you have ownership rights.",

    331: "1.6.4 You shall agree to bear full responsibility and any gains or losses for your own trading or non-trading activities.",

    332: "1.6.5 You shall confirm that the information provided during registration is true and accurate.",

    333: "1.6.6 You shall agree to abide by any relevant laws and regulations, for tax purposes, including reporting any trading profits.",

    334: "1.6.7 You shall agree not to engage in or participate in acts or activities that harm the interests of this website or the company at any time, regardless of whether it is related to the services provided on this website.",

    335: "1.6.8 This agreement shall only restrict the rights and obligations between you and us, and shall not involve the legal relations and legal disputes between the users of this website and between other websites and you due to digital asset transactions.",

    336: "II. Agreement Amendment",
    337: "We shall reserve the right to revise this agreement at any time and make announcements on the website without notifying you separately. The changed agreement shall be marked with the time of change on the homepage, and it will take effect automatically once it is published on the website. You shall browse and pay attention to the update time and content of this agreement frequently. If you do not agree to the relevant changes, you shall immediately stop using the services of this website; if you continue to use the services of this website, you accept and agree to the revised agreement. ",

    338: "3. Registration",

    339: "3.1 Registration Qualification",
    340: "You shall confirm and promise: When you complete the registration process or actually use the services provided by this website in other ways allowed by this website, you shall be a natural person, legal person, or other organization that can sign this agreement and use the services of this website as required by applicable laws. Once you click the Agree to Register button, you or your authorized agent have agreed to the contents of the agreement and the agent shall register and use the services of this website. If you do not have the above-mentioned subject qualifications, you and your authorized agent shall bear all consequences arising therefrom, and the company shall reserve the right to cancel or permanently freeze your account and hold you and your authorized agent accountable. ",

    341: "3.2 Registration Purpose",

    342: "You confirm and promise that your registration on this website is not meant to violate laws and regulations or disrupt the order of digital asset transactions on this website.",

    343: "3.3 Registration Process",
    344: "3.3.1 You agree to provide information such as a valid email address or mobile number based on the requirements of the user registration page of this website. You can use the email address, mobile number or other methods allowed by this website as a means of login to enter this website. If necessary, in accordance with the relevant laws and regulations of different jurisdictions, you shall provide your real name, ID card and other relevant information as required by laws and regulations, privacy clauses and anti-money laundering clauses, and constantly update the registration information to meet timely, detailed and accurate requirements. All the original information entered will be cited as registration information. You shall be responsible for the authenticity, completeness and accuracy of such information, and bear any direct or indirect losses and adverse consequences arising therefrom. ",
    345: "3.3.2 If the laws, regulations, rules, orders and other regulations of your sovereign country or region have real-name requirements for mobile numbers, you shall agree that the registered mobile number is registered through real-name registration. If you do not provide it in accordance with the regulations, you shall bear any direct or indirect losses and adverse consequences.",

    346: "3.3.3 If you provide legal, complete and valid information required for registration and pass verification, you shall have the right to obtain the account and password of this website. If you get the account and password of this website, it shall be deemed that the registration is successful and you can log in as a member on this website. ",

    347: "3.3.4 You shall agree to receive emails and/or short messages from this website related to the management and operation of this website.",

    348: "4. Services",

    349: "This website only provides online trading platform services for digital asset trading activities (including but not limited to digital asset trading services).",

    350: "4.1 Service Content",

    351: "4.1.1 You shall have the right to browse the real-time market and transaction information of digital assets products on this website, and shall have the right to submit digital asset transaction instructions and complete digital asset transactions through this website.",

    352: "4.1.2 You shall have the right to view the information under your member account on this website and use the functions provided by this website.",

    353: "4.1.3 You shall have the right to participate in website activities organized by this website in accordance with the activity rules published on this website.",

    354: "4.1.4 This website promises to provide other services for you.",

    355: "4.2. Service rules You shall promise to abide by the following service rules of this website:",

    356: "4.2.1 You shall abide by the laws, regulations, and policies to ensure the legitimacy of all digital asset sources in your account. You shall not engage in illegal or other activities that damage the rights and interests of this website or third parties on this website or using the services of this website, including but not limited to sending or receiving any information that is illegal, or infringing on the rights of others, sending or receiving multi-level marketing materials or other harmful information or speech, and using or forging email header information of this website without authorization of this website. ",

    357: "4.2.2 You shall abide by laws and regulations, and properly use and keep your account number, login password, fund password, and the mobile number bound to you during registration, and the mobile verification code received by your mobile phone. You shall be fully responsible for any operations and consequences performed using your account number, login password, fund password, and mobile verification code. When you find that this website account, login password, or fund password, verification code is used by a third party without your authorization, or there are other account security problems, you shall immediately and effectively notify the website and request the website to suspend the services of this website account . This website shall have the right to take action on your request within a reasonable time, but this website shall not assume any responsibility for the consequences (including but not limited to any loss of you) that have occurred before the action is taken. You shall not give, borrow, rent, transfer or otherwise dispose of this website account to others without the consent of this website. ",

    358: "4.2.3 You agree to be responsible for all activities (including but not limited to information disclosure, information release, click online to agree or submit various rules and agreements, and online renewal agreements or purchase services.) that occur under your account and password on this website.",

    359: "4.2.4 When you conduct digital asset transactions on this website, you shall not maliciously interfere with the normal conduct of digital asset transactions or disrupt the order of transactions; you shall not interfere with the normal operation of this website or interfere with other users' use of the services of this website by any technical means or other means; you shall not maliciously slander the goodwill of this website by fictitious facts. ",
    360: "4.2.5 If you have disputes with other users due to online transactions, you shall not request this website to provide relevant information through judicial or administrative channels.",
    361: "4.2.6 During your use of the services provided by this website, you shall be solely responsible for the judgment and responsibility of all taxable taxes and all hardware, software, service and other expenses incurred.",

    362: "4.2.7 You shall abide by this agreement and other terms of service and operating rules published and updated by this website from time to time, and have the right to terminate the use of the services provided by this website at any time.",

    363: "V. Rights and Obligations of this Website",

    364: "5.1 If you do not have the registration qualifications stipulated in this agreement, this website shall have the right to refuse your registration. If you have already registered, this website shall have the right to cancel your member account, and this website shall reserve the right to hold you or your authorized agent accountable. Moreover, this website shall reserve the right to determine whether to accept your registration under any other circumstances. ",

    365: "5.2 If this website finds that you or your associated account user is not suitable for high-risk investment based on this website's own judgment, this website shall have the right to suspend or terminate the use of your account and all associated accounts.",

    366: "5.3 If this website finds that the account user is not the initial registrant of the account, this website shall have the right to suspend or terminate the use of the account.",

    367: "5.4 When this website reasonably suspects that the information you provide is incorrect, untrue, invalid or incomplete through technical testing, manual sampling and other testing methods, this website shall have the right to notify you to correct or update the information or suspend or terminate the provision of this website to you service.",

    368: "5.5 This website shall have the right to correct any information displayed on this website when it finds any obvious errors.",

    369: "5.6 This website shall reserve the right to modify, suspend or terminate the services of this website at any time. This website shall modify or suspend the service without prior notice; If this website terminates one or more of the services of this website, the termination shall take effect on the day when this website publishes the termination announcement.",

    370: "5.7 This website shall take necessary technical means and management measures to ensure the normal operation of this website, and provide necessary and reliable trading environment and trading services to maintain the order of digital asset transactions.",

    371: "5.8 If you have not used this website member account and password to log in to this website for one year, this website shall have the right to cancel your account on this website. After the account is canceled, this website shall have the right to open the corresponding member name to other users for registration. ",

    372: "5.9 This website shall protect the safety of your digital assets by strengthening technical investment and improving security precautions, and shall notify you in advance in case of foreseeable security risks in your account.",

    373: "5.10 This website shall delete all kinds of content and information on this website that do not comply with laws and regulations or the provisions of this website at any time, without prior notice.",

    374: "5.11 This website shall have the right to request more information or materials from you in accordance with the laws, regulations, rules, and orders of the sovereign country or region to which you belong, and to take reasonable measures to meet the requirements of local regulations. You shall be obligated to cooperate; this website shall have the right to suspend or permanently stop some or all of the services of this website for you in accordance with the laws, regulations, rules, and orders of your sovereign country or region. ",

    375: "6. Compensation",

    376: "6.1 If you violate this agreement or other laws and regulations, you shall compensate us at least US$2 million and bear all the costs (including attorney fees, etc.) incurred. If it is insufficient to cover the actual loss, you shall make it up. ",

    377: "7. The Right to Seek Injunctive Relief",

    378: "We and you both acknowledge that common law remedies for your breach of contract or possible breach of contract may be insufficient to cover all the losses we have suffered. Therefore, we shall have the right to seek injunctive relief and all other remedies permitted by common law or equity in the event of your breach of contract or possible breach of contract. ",
    379: "8. Limitation and Exemption of Liability",
    380: "8.1 You understand and agree that, under any circumstances, we shall not be responsible for the following matters:",
    381: "8.1.1 Loss of Income;",
    382: "8.1.2 Loss of Money Expected to Be Saved;",
    383: "8.1.3 Losses Caused by Information Problems;",
    384: "8.1.4 Loss of Opportunity, Goodwill or Reputation;",
    385: "8.1.5 Any indirect, special or incidental loss or damage due to infringement (including negligence), breach of contract or any other reason, regardless of whether such loss or damage can be reasonably foreseen by us; regardless of whether we have been notified in advance of the possibility of such loss or damage. ",
    386: "8.2 You understand and agree that we shall not be liable for any damages caused by any of the following circumstances:",
    387: "8.2.1 There may be major violations of laws or contracts in your specific transactions.",
    388: "8.2.2 Your behavior on this website is suspected of being illegal or unethical.",
    389: "8.2.3 Expenses and losses incurred by the purchase or acquisition of any data, information, or transactions through the services of this website or alternative acts.",
    390: "8.2.4 Your misunderstanding of the services of this website",
    391: "8.2.5 Any other losses related to the services provided on this website that are not caused by us.",
    392: "8.3 We shall not be responsible for the inability to service or delay in service, as well as the loss caused to you due to information network equipment maintenance, information network connection failure, failure of computer, communication or other systems, electricity failures, weather reasons, accidents, strikes, labor disputes, riots, uprisings, riots, insufficient productivity or production materials, fires, floods, storms, explosions, wars, bank or other partner reasons, digital asset market collapse, government actions, judicial or administrative orders, and other behaviors beyond our control or our inability to control, or third-party reasons",
    393: "8.4 We shall not guarantee that all the information, programs, texts, etc. on this website are completely safe, free from interference and damage by any virus, Trojan horse and other malicious programs. Therefore, your login, use of any service on this website, or download and use of any downloaded programs, information, data, etc. are your personal decision, and you shall bear the risks and possible losses yourself. ",
    394: "8.5 We shall not make any guarantees and promises for any information, products and services of any third-party websites linked to this website, and any other forms of content that are not our subject. If you use any services, information and products provided by third-party websites, it is your personal decision and you shall bear all responsibilities arising therefrom. ",
    395: "8.6 We shall not make any express or implied guarantees for your use of the services on this website, including but not limited to the applicability of the services provided on this website, no errors or omissions, continuity, accuracy, reliability, and applicability to a certain Specific purpose. Moreover, we shall not make any promises and guarantees regarding the validity, accuracy, correctness, reliability, quality, stability, completeness and timeliness of the technology and information involved in the services provided on this website. Whether to log in or use the services provided by this website is your personal decision and at your own risk and possible losses. We shall not make any express or implied guarantees regarding the market, value and price of digital assets. You shall understand that the digital asset market is unstable, and prices and values may fluctuate sharply or collapse at any time. Trading digital assets shall be your personal free choice and decision and at your own risk and possible losses. ",
    396: "8.7 Our guarantees and undertakings stipulated in this agreement shall be our only guarantees and statements regarding the services provided by this agreement and this website, and shall replace the guarantees and undertakings generated by any other means, whether written or oral, explicit or implicit. All these guarantees and statements shall only represent our own commitments and guarantees, and shall not guarantee that any third party will comply with the guarantees and promises in this agreement. ",

    397: "8.8 We shall not waive any rights that we have not mentioned in this agreement to limit, exempt or offset our liability for damages to the maximum extent of the applicable law.",

    398: "8.9 After you register, you shall acknowledge that we perform any operations in accordance with the rules stipulated in this agreement, and you shall bear responsibilities for any risks arising therefrom.",

    399: "9. Termination of Agreement",

    400: "9.1 This website shall have the right to terminate all services on this website in accordance with this agreement. This agreement shall terminate on the day when all services on this website are terminated.",

    401: "9.2 After the termination of this agreement, you shall have no right to require this website to continue to provide any services or perform any other obligations, including but not limited to requiring this website to keep or disclose to you any information in its original website account, and to forward any information that it has not read or sent to you or a third party. ",

    402: "9.3 The termination of this agreement does not affect the observant party's request for other responsibilities from the breaching party.",

    403: "10. Intellectual Property",

    404: "10.1 All intellectual property rights contained in this website, including but not limited to website logos, databases, website design, text and graphics, software, photos, videos, music, sound and the foregoing combination, software compilation, related source code and software (including small applications and scripts), belong to this website. You shall not copy, change, copy, send or use any of the foregoing materials or content for commercial purposes. ",

    405: "10.2 All rights contained in the name of this website (including but not limited to goodwill and trademarks, logos) belong to the company.",

    406: "10.3 Your acceptance of this agreement shall be deemed that you have taken the initiative to transfer the copyright of any form of information published on this website to the owner of this website free of charge, including but not limited to: reproduction rights, distribution rights, rental rights, exhibition rights, performance rights, screening rights, broadcasting rights, information network communication rights, filming rights, adaptation rights, translation rights, compilation rights, and other transferable rights that shall be enjoyed by the copyright owner. This website shall have the right to file a separate lawsuit against any subject's infringement and obtain full compensation. The validity of this agreement relates to the content of any works protected by copyright law that you publish on this website, regardless of whether the content was formed before or after the signing of this agreement. ",

    407: "10.4 You shall not illegally use or dispose of the intellectual property rights of this website or others in the process of using the services of this website. You shall not publish or authorize other websites (and media) to use the information published on this website in any form. ",

    408: "10.5 Your logging into this website or using any service provided by this website shall not be deemed as our transfer of any intellectual property rights to you.",


    409: "11. Transfer",

    410: "The rights and obligations agreed in this agreement shall also govern the assignees, heirs, executors and administrators of the parties who obtain benefits from the rights and obligations. You shall not transfer to any third party without our consent, but we can transfer our rights and obligations in this agreement to any third party at any time and give you notice. ",

    411: "12. Severability",

    412: "If any clause in this agreement is deemed unenforceable, invalid or illegal by any court with jurisdiction, it shall not affect the validity of the remaining clauses in this agreement.",

    413: "Thirteen. Abstaining",

    414: "We or any of your party's waiver of the liability for breach of contract or other responsibilities stipulated in this agreement shall not be determined or interpreted as a waiver of other liability for breach of contract; Failure to exercise any rights or remedies shall not be interpreted as a waiver of such rights or remedies in any way. ",

    415: "14. Title",

    416: "All titles shall be intended for the convenience of expressing the agreement, and shall not be used to expand or limit the content or scope of the terms of the agreement.",

    417: "15. Applicable Law",

    418: "All the content of this agreement is made in accordance with Swiss Federal Law and Abu Dhabi ADGM Law. Its establishment, interpretation, content and execution shall be governed by Swiss federal laws and relevant laws and regulations of Abu Dhabi ADGM; any claims or litigation arising from the services agreed in this agreement shall be governed, interpreted and executed in accordance with the above-mentioned laws. For the avoidance of doubt, this clause shall clearly apply to any infringement claims against us. Any court of jurisdiction or venue for any claims or litigation against us or related to us is in the Swiss Confederation and Abu Dhabi ADGM. You shall unconditionally obtain exclusive jurisdiction for litigation and appeals in the Swiss Federal and Abu Dhabi ADGM courts. You shall also unconditionally agree that any disputes or issues related to this agreement or any claims and litigation arising from the place or courts are exclusively in the Swiss Confederation and Abu Dhabi ADGM. If any other business on this website has a special agreement on jurisdiction, you shall follow the agreement. The principle of inconvenience to courts shall not apply to courts selected in accordance with these terms of service. ",

    419: "16. Effectiveness and Interpretation of the Agreement",

    420: "16.1 This agreement shall take effect when you click on the registration page of this website to agree to register, complete the registration process, and obtain the account and password of this website. It shall be binding on this website and you.",

    421: "16.2 The final interpretation of this agreement belongs to this website.",
    422: "Enter the password again",
    423: "Enter the correct number of snap-up items",
    424: "The invitation code does not exist",
    425: "You have subscribed",
    426: "Your information has been submitted. Please wait for official review results patiently",
    427: "The mailbox has been registered",
    // Center/interestLog
    428: "Interest Records",
    429: "Time",
    430: "Interest",

    // Community/index
    431: "Node Voting",
    432: "Voting Mechanism",
    433: "One Coin, One Vote",

    434: "Each account can vote for up to five nodes. Each TAFT is only considered as one vote",

    435: "The TAFT participating in node voting will be locked for 1 month. It will be automatically unlocked after expiration. During the lockup period, a fixed node elector and alternative electors can be set. If the voting node abandons the election during the lock-up period, the corresponding TAFT is automatically unlocked. ",

    436: "The top 21 nodes with the weight of cumulative votes will automatically be elected as TAF Chain nodes;",
    437: "Weight Ratio",
    438: "The ranking of the node is determined by the total voting value. Total voting value = Total number of votes * Node lock weight",
    439: "Node lock position weights: 30 days = 1; 60 days = 2; 90 days = 3; 120 days = 4; 360 days = 5;",
    440: "Node Revenue",
    441: "Block Mechanism",
    442: "TAF Chain super nodes are voted by all token holders, once every 105 minutes. The top 21 ranked by voting rate will automatically become super nodes, and block generation is carried out in rounds. The remaining 29 of the top 50 automatically become candidate nodes. ",

    443: "The ranking of nodes is determined by the total voting value. Total vote value = Total vote * Node lock position weight. Node lock position weight: 30 days=1; 60 days=2; 90 days=3; 120 days=4; 360 days=5; ",
    444: "Reward Mechanism",
    445: "TAF Chain will issue 1.5% of the total issuance every year, namely, 6 billion * 1.5% = 90 million",
    446: "Token, used for all node rewards.",
    447: "Block Producer Node Reward",
    448: "An additional 90 million TAFT is issued each year, 50% of which is used for block rewards for 21 nodes.",
    449: "In TAFT, a total of 63,000 blocks are produced every 105 minutes. Each node can get 3,000 block rewards on average.",
    450: "Alternative Node Reward",
    451: "In addition to block rewards, another 50% of the additional issuance is used to averagely reward 21 block generating nodes + 29 candidate nodes in each campaign to encourage competition and fairness.",
    452: "Vote Entry",
    453: "Waiting to open",
    454: "Participate in Node Election",

    // presell
    455: "Subscription Rules",

    456: "75% of the funds raised in the first phase of the ICO will be used for the development and expansion of the TAFT platform. 15% will be used for legal expenses related to laws and regulations and related expenses for public propaganda. 10% will be used for community services. ",

    457: "80% of the funds raised in the second phase of ICO will continue to be invested in technology research and development, maintaining TAFT's leading position in the industry. 10% will be used to support the blockchain R&D team for secondary development on the TAFT public chain. The remaining 10% will be used for public propaganda related expenses, making full preparations for the official release of the TAFT public chain globally. ",
    458: "OK",
// pc 端
    459: "Download",
    460: "Logo Package",
    461: "Your information has been submitted,",
    462: "Please wait for official review results patiently",
    463: "Identity authentication has not been performed, and platform usage will be restricted,",
    464: "Perform identity authentication first",
    465: "View",
    466: "Your information has been reviewed.",
    467: "Your identity verification failed",
    468: "Enter your certificate number",
    469: "Select your certificate type",
    470: "Upload your certificate photo",
    471: "Select your date of birth",
    472: "Enter your last name",
    473: "Enter your name",
    474: "Enter your certificate number",
    475: "Help Center",

    476: "Long press to save the picture, and scan QR code to share it with your friends ",

    477: "Invite you to join the AECO ecosystem",

    478: "Transfer",

    479: "Quota Transfer",

    480: "Parameter error",

    481: "Transfer failed",

    482: "The user does not exist",

    483: "Incorrect account or password",

    484: "Transfer amount <= 0",

    485: "Insufficient balance",

    486: "Users cannot be transferred for themselves",

    487: "The other party's account is not KYC certified",

    488: "Transfer records",

    489: "Click Copy",

    490: "Rebate records",

    491: "Reset password",

    492: "ARTHUR-EX——Underlying Infrastructure of the Decentralized Exchange",

    493: "ARTHUR, ARTHUR-EX, AECO, the underlying system of the Arthur trading platform, cross-chain trading, exchanges, the official website of Arthur Exchange, decentralized exchanges, blockchain exchanges, blockchain asset trading platforms, TAF, TAF mainnet, TAFT, blockchain infrastructure",

    494: "ARTHUR-EX -- a high-speed, safe and credible underlying system for the decentralized cross-chain digital asset trading platform, which can quickly build applications such as decentralized exchanges",

    495: "View More",

    496: "Until sold out",

    497: "75% of the funds raised in the first round will be used for the development and expansion of the ARTHUR-EX platform. 15% will be used for legal expenses related to laws and regulations and related publicity expenses. 10% will be used for community services.",

    498: "Global Public Sale",

    499: "Estimated issuance time: 2021.5.1 or later. The final issuance period will be determined when the regulatory procedures are completed. The expected issuance areas include Asia, Europe, the Middle East and areas permitted by legal supervision.",

    500: "Thank you for your interest in ARTHUR-EX materials. We hope these materials are useful to you. For any questions, please feel free to contact us at aeco@arthurex.com",

    501: "Transfer",

    502: "Current Quota",

    503: "Account",

    504: "Amount",

    505: "Enter the other party's registered email address",

    506: "Enter the transferred AECO quota",

    507: "Enter an integer",

    508: "Transfer Account",

    509: "Amount of Transfer (AECO)",

    510: "Payment Verification",

    511: "Transfer Amount",

    512: "Payment",

    513: "Enter the payment password",

    514: "Payed successfully",

    515: "Back",

    516: "Bound",

    517: "Payment required",

    518: "Or scan QR code to pay",

    519: "You can exchange currencies directly across chains on decentralized exchanges",

    520: "You can directly cross chain",

    521: "Swap different currencies on decentralized exchanges",

    522: "Statement:",

    523: "Please look forward to the world's first large-scale sale feast in 2021.",

    524: "Before transfer, reconfirm the accuracy of the other party's account",

    525: "to avoid damage to your property"
};
export default message;
