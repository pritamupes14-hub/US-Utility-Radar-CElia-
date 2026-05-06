const DASHBOARD_DATA = {
    macro: {
        totalMarketCap: 551.4, // Billions
        totalRevenue: 145.49, // Billions
        avgCapex: 74, // Billions (rough avg/total depending on view)
        totalCustomers: 28, // Millions (Electricity-only)
        renewablesCapacity: 142 // GW combined clean energy
    },
    companies: {
        nextera: {
            id: 'nextera',
            name: 'NextEra Energy',
            ticker: 'NEE',
            mcap: 198.8,
            revenue: 27.41,
            revenue3Y: [28.1, 28.11, 27.41], // FY23, FY24, FY25
            customers: 5.8, // Electricity-only (FPL regulated electric utility)
            capex5Y: 34.5,
            energyMix: { renewable: 60, nuclear: 12, gas: 28, coal: 0 },
            swot: {
                s: ['World leader in wind & solar generation', 'Scale advantages in procurement', 'Strong Florida demographic growth'],
                w: ['High interest rate sensitivity', 'Supply chain concentration risks'],
                o: ['AI data center massive load growth', 'Battery storage deployment', 'Transmission buildout'],
                t: ['Regulatory pushback on rate cases', 'Solar panel import tariffs/restrictions']
            },
            earningsTone: 'Highly confident. Strong focus on massive renewable pipeline and data center demand.',
            earningsBullets: [
                'Reported Q4 2025 adjusted earnings of $1.133 billion ($0.54 per share).',
                'Added record new renewables and storage to backlog.',
                'FPL continues to see strong customer growth in Florida.',
                'Management emphasized unique positioning to capture AI data center load.'
            ]
        },
        duke: {
            id: 'duke',
            name: 'Duke Energy',
            ticker: 'DUK',
            mcap: 101.0,
            revenue: 32.24,
            revenue3Y: [28.7, 30.3, 32.24],
            customers: 8.4, // Electricity-only (excludes ~1.6M natural gas customers)
            capex5Y: 103.0,
            energyMix: { renewable: 12, nuclear: 34, gas: 36, coal: 18 },
            swot: {
                s: ['Massive regulated footprint across Carolinas/Florida', 'Strong nuclear baseload operations'],
                w: ['Significant legacy coal exposure', 'High capital requirements for grid modernization'],
                o: ['Unprecedented $103B 5-year capital plan', 'Advanced manufacturing & AI load growth in Southeast'],
                t: ['Execution risk on massive CAPEX plan', 'Pace of coal transition and replacement power']
            },
            earningsTone: 'Resolute and expansionary. Focused on historic capital deployment to meet surging demand.',
            earningsBullets: [
                'Reported FY2025 adjusted EPS of $6.31, beating guidance.',
                'Announced record $103 billion 5-year capital plan (18% increase).',
                'Driven by historic load growth from data centers and advanced manufacturing.',
                'Planning 14 GW of new generation, including significant natural gas additions.'
            ]
        },
        southern: {
            id: 'southern',
            name: 'Southern Company',
            ticker: 'SO',
            mcap: 105.0,
            revenue: 29.6,
            revenue3Y: [29.3, 26.7, 29.6],
            customers: 4.7, // Electricity-only (excludes ~4.3M gas customers via Nicor Gas, Atlanta Gas Light)
            capex5Y: 46.0,
            energyMix: { renewable: 16, nuclear: 20, gas: 48, coal: 16 },
            swot: {
                s: ['Vogtle 3 & 4 nuclear completion (derisked)', 'Premium regulatory jurisdictions', 'Strong regional economic development'],
                w: ['Higher leverage post-Vogtle', 'Slower renewable transition compared to peers'],
                o: ['Southeast population & industrial growth', 'Data center load in Georgia'],
                t: ['Storm response costs/resilience', 'Managing remaining coal fleet retirements']
            },
            earningsTone: 'Relieved and optimistic. Transitioning from Vogtle construction to operational excellence and growth.',
            earningsBullets: [
                'Reported FY2025 adjusted EPS of $4.30.',
                'Vogtle 3 & 4 fully operational, removing major historical overhang.',
                'Experiencing robust commercial and industrial load growth.',
                'Focus shifting to grid resilience and balanced generation additions.'
            ]
        },
        nrg: {
            id: 'nrg',
            name: 'NRG Energy',
            ticker: 'NRG',
            mcap: 34.5,
            revenue: 30.71,
            revenue3Y: [31.5, 28.8, 30.71],
            customers: 7.5, // Electricity retail customers (excludes bundled gas retail)
            capex5Y: 10.5,
            energyMix: { renewable: 5, nuclear: 10, gas: 50, coal: 35 }, // Proxy
            swot: {
                s: ['Leading integrated retail platform', 'Strong free cash flow generation', 'Diversified geographic footprint'],
                w: ['Wholesale market volatility exposure', 'Carbon-intensive legacy generation'],
                o: ['LS Power 13GW acquisition integration', 'CPower demand response platform growth', 'Retail margin expansion'],
                t: ['Commodity price swings', 'Retail competition and customer churn']
            },
            earningsTone: 'Transformational. Focused on integrating the massive LS Power acquisition and expanding the retail platform.',
            earningsBullets: [
                'Reported FY2025 Adjusted EBITDA of $4.1 billion.',
                'Completed transformative acquisition of 13 GW LS Power portfolio and CPower.',
                'Generated $2.2 billion in Free Cash Flow before Growth.',
                'Returned $1.6B to shareholders via repurchases and dividends.'
            ]
        },
        constellation: {
            id: 'constellation',
            name: 'Constellation Energy',
            ticker: 'CEG',
            mcap: 113.5,
            revenue: 25.53,
            revenue3Y: [24.4, 23.6, 25.53],
            customers: 2.0, // Electricity-only (C&I / Wholesale)
            capex5Y: 15.0,
            energyMix: { renewable: 10, nuclear: 85, gas: 5, coal: 0 },
            swot: {
                s: ['Largest US carbon-free nuclear fleet', 'Unmatched baseload reliability (94.7% capacity factor)', 'Nuclear PTC downside protection'],
                w: ['Single-asset class concentration risk', 'Wholesale power price sensitivity'],
                o: ['Direct PPAs with hyperscalers (AI data centers)', 'Calpine acquisition integration (55-60GW total capacity)', 'Clean hydrogen production'],
                t: ['Nuclear regulatory/safety risks', 'Uranium fuel supply chain']
            },
            earningsTone: 'Bullish. Capitalizing on the immense value of reliable, carbon-free nuclear baseload for tech giants.',
            earningsBullets: [
                'Reported FY2025 Adjusted Operating Earnings of $9.39 per share.',
                'Nuclear fleet achieved industry-leading 94.7% capacity factor.',
                'Completed massive Calpine acquisition, creating nation\'s largest clean energy producer.',
                'Securing premium pricing through clean energy matching for data centers.'
            ]
        }
    },
    news: [
        // === NEXTERA ENERGY — Official Newsroom: newsroom.nexteraenergy.com ===
        { id: 1, company: 'nextera', category: 'regulatory', date: '2026-04-28',
          title: 'NRC Authorizes FPL\'s St. Lucie Nuclear Plant to Operate for Another 20 Years',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2026-04-28-NRC-Authorizes-FPLs-St-Lucie-Nuclear-Plant-to-Operate-for-Another-20-Years' },

        { id: 2, company: 'nextera', category: 'strategy', date: '2026-03-20',
          title: 'NextEra Energy Receives Approval from President Trump to Develop Up to 10 GW of Natural Gas-Powered Generation',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2026-03-20-NextEra-Energy-receives-approval-from-President-Donald-J-Trump-to-develop-up-to-10-GW-of-natural-gas-powered-generation-to-meet-nations-historic-power-demand' },

        { id: 3, company: 'nextera', category: 'deals', date: '2026-02-26',
          title: 'NextEra Energy Announces Sale of $2.0 Billion Equity Units',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2026-02-26-NextEra-Energy-announces-sale-of-equity-units' },

        { id: 4, company: 'nextera', category: 'strategy', date: '2026-02-13',
          title: 'NextEra Energy Transmission and Exelon Welcomed PJM Board Vote to Advance Grid Reliability Project',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2026-02-13-NextEra-Energy-Transmission-and-Exelon-Welcomed-PJM-Board-Vote-to-Advance-Grid-Reliability-Project' },

        { id: 5, company: 'nextera', category: 'deals', date: '2025-12-08',
          title: 'NextEra Energy Resources and Meta Strengthen American Energy Leadership',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2025-12-08-NextEra-Energy-Resources-and-Meta-Strengthen-American-Energy-Leadership' },



        { id: 7, company: 'nextera', category: 'regulatory', date: '2025-11-20',
          title: 'Florida Regulators Approve FPL Rate Agreement That Keeps Customer Bills Low',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2025-11-20-Florida-regulators-approve-FPL-rate-agreement-that-keeps-customer-bills-low,-meets-needs-of-growing-state' },

        { id: 8, company: 'nextera', category: 'earnings', date: '2025-10-23',
          title: 'Florida Power & Light Surpasses $1 Billion in Annual Fuel Savings for Customers',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/Florida-Power-Light-surpasses-1-billion-in-annual-fuel-savings-for-customers' },

        // === CONSTELLATION ENERGY — Official Newsroom: constellationenergy.com ===
        { id: 9, company: 'constellation', category: 'earnings', date: '2026-02-24',
          title: 'Constellation Energy Reports Fourth Quarter and Full Year 2025 Financial Results ($9.39/share)',
          source: 'Constellation Energy Investor Relations',
          link: 'https://investors.constellationenergy.com/news-releases/news-release-details/constellation-energy-reports-fourth-quarter-and-full-year-2025' },

        { id: 10, company: 'constellation', category: 'deals', date: '2026-01-07',
          title: 'Constellation Energy Completes Acquisition of Calpine, Creating Nation\'s Largest Clean Energy Producer',
          source: 'Constellation Energy Newsroom',
          link: 'https://www.constellationenergy.com/newsroom/2026/constellation-completes-calpine-acquisition.html' },

        { id: 11, company: 'constellation', category: 'strategy', date: '2026-01-20',
          title: 'Constellation CEO: "We Produce Enough Energy to Power Mexico" — Barron\'s Interview',
          source: 'Constellation Energy Newsroom',
          link: 'https://www.constellationenergy.com/newsroom.html' },

        // === DUKE ENERGY — Official Newsroom: news.duke-energy.com ===
        { id: 12, company: 'duke', category: 'earnings', date: '2026-02-10',
          title: 'Duke Energy Reports Fourth Quarter and Year-End 2025 Financial Results; Announces Record $103B Capital Plan',
          source: 'Duke Energy News Center',
          link: 'https://news.duke-energy.com/releases/duke-energy-reports-fourth-quarter-and-year-end-2025-financial-results' },

        { id: 13, company: 'duke', category: 'strategy', date: '2026-04-15',
          title: 'Duke Energy to Release First-Quarter 2026 Earnings on May 5, 2026',
          source: 'Duke Energy Investor Relations',
          link: 'https://www.duke-energy.com/investors' },

        { id: 14, company: 'duke', category: 'regulatory', date: '2025-12-10',
          title: 'Duke Energy Files Carolinas Resource Plan, Targets 14 GW New Generation Including Natural Gas',
          source: 'Duke Energy News Center',
          link: 'https://news.duke-energy.com/releases' },

        // === SOUTHERN COMPANY — Official Newsroom: southerncompany.com/newsroom ===
        { id: 15, company: 'southern', category: 'earnings', date: '2026-02-12',
          title: 'Southern Company Reports FY2025 Adjusted EPS of $4.30; Vogtle 3&4 Fully Operational',
          source: 'Southern Company Newsroom',
          link: 'https://www.southerncompany.com/newsroom.html' },

        { id: 16, company: 'southern', category: 'strategy', date: '2026-03-15',
          title: 'Southern Company Advances Grid Resilience & Clean Energy Investments Across Southeast',
          source: 'Southern Company Newsroom',
          link: 'https://www.southerncompany.com/newsroom.html' },

        // === NRG ENERGY — Official Newsroom: nrg.com/about/newsroom ===
        { id: 17, company: 'nrg', category: 'deals', date: '2026-01-30',
          title: 'NRG Energy Completes Acquisition of 13 GW LS Power Generation Portfolio and CPower',
          source: 'NRG Energy Newsroom',
          link: 'https://www.nrg.com/about/newsroom.html' },

        { id: 18, company: 'nrg', category: 'earnings', date: '2026-02-24',
          title: 'NRG Energy Reports Full Year and Q4 2025 Financial Results; FY2025 Adjusted EBITDA $4.1B',
          source: 'NRG Energy Investor Relations',
          link: 'https://investors.nrg.com/news-releases' },

        { id: 19, company: 'nrg', category: 'strategy', date: '2026-02-02',
          title: 'NRG Energy Issues Updated 2026 Financial Guidance Incorporating LS Power Contribution',
          source: 'NRG Energy Investor Relations',
          link: 'https://investors.nrg.com/news-releases' }
    ]
};

DASHBOARD_DATA.strategies = {
    duke: {
        gw: "7.6 GW",
        strategy: "Targets hyperscale computing customers across the Carolinas and Midwest. Has ~7.6 GW of contract load ESA signed through long-term MOUs and custom tariffs under the Accelerating Clean Energy (ACE) framework and Clean Transition Tariffs (CTTs), aligning clean generation with corporate climate goals. Customer acquisition is supported through on-site battery storage, behind-the-meter microgrids, and dedicated renewable capacity for large-load customers."
    },
    nextera: {
        gw: "14.1+ GW",
        strategy: "Targets hyperscale data center, AI and other large-load customers across the U.S., using utility, cooperative and municipal channels to secure anchor demand and long-duration contracted load. Has ~14.1+ GW of disclosed signed and upcoming arrangements across PPAs, nuclear recontracting, clean-energy agreements, LOIs, MOUs and framework agreements. Wins customers through a differentiated full-stack model combining renewables, storage, bridge gas, nuclear, customer supply and transmission access - enabling faster interconnection, phased load ramp-up and flexible clean-to-firm power solutions for hyperscale customers."
    },
    southern: {
        gw: "11 GW",
        strategy: "Signed ~11 GW of contracted large-load pipeline, driven primarily by hyperscale data center demand, with an additional ~75 GW of prospective projects under evaluation. Uses the Customer-Identified Resource (CIR) or \"bring your own clean energy\" model, allowing customers to fund new clean generation directly."
    },
    nrg: {
        gw: "1.8 GW (Texas)",
        strategy: "Established ~1.8-GW of data-center-linked capacity across Texas through long-term leases, LOIs, and gas-backed development agreements. NRG has started anchoring hyperscale and AI customers using long-term energy contracts, premium-priced supply, and customer-aligned natural-gas infrastructure, including PPA-pending and scalable power developments."
    },
    constellation: {
        gw: "Various",
        strategy: "Focuses on providing long-term carbon-free baseload supply to tech giants through nuclear PPAs, replacing state nuclear subsidy support. Leverages Texas generation assets with contractual curtailment rights during grid stress events, and secures large federal contracts backed by nuclear and renewable generation."
    }
};

DASHBOARD_DATA.contracts = [
    { companyId: "duke", company: "Duke Energy", customer: "Amazon Web Services (AWS)", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "~400 MW", details: "Service structured under ACE tariff MOU with 10-15-year term; full infrastructure cost recovery via minimum billing, strict interruptibility, and credit support.", date: "May-24" },
    { companyId: "duke", company: "Duke Energy", customer: "Microsoft", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "720-810 MW", details: "Large-load service under ACE tariff MOU; minimum billing and refundable capital contributions applied, with Clean Transition Tariff under evaluation and interruptible provisions enforced.", date: "May-24" },
    { companyId: "duke", company: "Duke Energy", customer: "Google", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Load governed by ACE tariff MOU; demand-response participation and minimum demand enforcement embedded in service design.", date: "May-24" },
    { companyId: "duke", company: "Duke Energy", customer: "Toyota Battery Manufacturing", sector: "Automotive", useCase: "EV Battery Manufacturing", segment: "Industrial", load: "N/A", details: "Industrial supply incorporating on-site microgrid integration, EV charging infrastructure, and grid optimization pilots.", date: "2021 / Oct 2023" },
    { companyId: "duke", company: "Duke Energy", customer: "VinFast", sector: "Automotive", useCase: "EV Assembly & Battery Manufacturing", segment: "Industrial", load: "90 MW", details: "Industrial service enabled through mandatory interruptibility, with customer-funded substation upgrades supporting load interconnection.", date: "Mar-22" },
    { companyId: "duke", company: "Duke Energy", customer: "Nucor Corporation", sector: "Advanced Manufacturing", useCase: "Steel Manufacturing", segment: "Industrial", load: "N/A", details: "Load served under ACE tariff MOU with system-benefit guarantees linked to utility merger conditions and shareholder backstop.", date: "May-24" },
    { companyId: "duke", company: "Duke Energy", customer: "Digital Realty", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Long-term industrial service arrangement featuring minimum billing and credit support to underwrite network investments.", date: "Jan-26" },
    { companyId: "duke", company: "Duke Energy", customer: "QTS", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Service structured with minimum billing, interruptibility, and upfront customer capital to de-risk network upgrades.", date: "Jan-26" },
    { companyId: "duke", company: "Duke Energy", customer: "Meta", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Existing operations supplied under legacy industrial tariffs, with expansion subject to revised load and billing frameworks.", date: "Pre-2025" },
    
    { companyId: "southern", company: "Southern Company (Mississippi Power)", customer: "Compass Datacenters", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "~500 MW", details: "Firm supply delivered under PSC-approved special contract, with ~500-MW committed and 10-year state tax incentives applied.", date: "Jan-25" },
    { companyId: "southern", company: "Southern Company (Georgia Power)", customer: "Digital Realty", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Renewable energy sourced by the customer through third-party contracts rather than a Georgia Power retail supply agreement.", date: "May-22" },
    { companyId: "southern", company: "Southern Company (Georgia Power)", customer: "QTS", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "N/A", details: "Clean energy supplied via a 20-year solar PPA under the Customer Renewable Supply Procurement (CRSP) tariff.", date: "Mar-22" },
    
    { companyId: "constellation", company: "Constellation Energy", customer: "Microsoft", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "835 MW", details: "Baseload supply provided through a 20-year nuclear PPA enabling the restart of Three Mile Island Unit-1.", date: "Sep-24" },
    { companyId: "constellation", company: "Constellation Energy", customer: "Meta", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "1,121 MW", details: "Full output of the Clinton nuclear plant contracted under a 20-year PPA, replacing state nuclear subsidy support.", date: "Jun-25" },
    { companyId: "constellation", company: "Constellation Energy", customer: "CyrusOne", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "~1,100 MW", details: "Long-term power supplied from Texas generation assets, with contractual curtailment rights during grid stress events.", date: "Jul 2025 / Feb 2026" },
    { companyId: "constellation", company: "Constellation Energy", customer: "U.S. General Services Administration (GSA)", sector: "Government", useCase: "Federal Facilities", segment: "Commercial", load: ">1M MWh/yr", details: "Electricity supplied under a 10-year, $840-m fixed-price federal contract backed by nuclear and renewable generation.", date: "Jan-25" },
    
    { companyId: "nrg", company: "NRG Energy", customer: "Cipher Digital (AWS)", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "300 MW", details: "Turnkey data center capacity delivered under a 15-year lease; site transitioned from Bitcoin mining to AI use with financing supported by a $200-m revolving credit facility.", date: "Nov-25" },
    { companyId: "nrg", company: "NRG Energy", customer: "PowLan & Menlo Equities", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "400 MW", details: "Development pipeline secured through LOIs for data centers on existing and greenfield NRG sites, with long-term power sold at premium pricing.", date: "Feb-25" },
    { companyId: "nrg", company: "NRG Energy", customer: "LandBridge", sector: "Data Centre", useCase: "Data Center", segment: "Industrial", load: "1100 MW", details: "Development framework advanced for a 1.1-GW gas-fired plant; project remains PPA-pending with initial permits and interconnection requests submitted.", date: "Sept. / Oct. 2025" },
    
    { companyId: "nextera", company: "NextEra Energy", customer: "Entergy", sector: "Utility", useCase: "Solar & Storage", segment: "Utility", load: "Up to 4.5 GW", details: "Renewable capacity delivered through a five-year joint development agreement, with NextEra acting as developer to support regulated load growth across Entergy territories.", date: "Jun-24" },
    { companyId: "nextera", company: "NextEra Energy", customer: "Google", sector: "Data Centre", useCase: "Data Center", segment: "Commercial", load: "615 MW", details: "Long-term carbon-free supply secured via a 25-year nuclear PPA linked to the restart of the Duane Arnold Energy Center.", date: "Oct-25" },
    { companyId: "nextera", company: "NextEra Energy", customer: "Google", sector: "Data Centre", useCase: "Data Center", segment: "Commercial", load: "Multiple GW", details: "Multi-GW campuses co-developed under a joint development platform integrating dedicated generation and capacity infrastructure.", date: "Dec-25" },
    { companyId: "nextera", company: "NextEra Energy", customer: "Meta", sector: "Data Centre", useCase: "Data Center", segment: "Commercial", load: "~2.5 GW", details: "Hyperscale load supported through a portfolio of long-term solar and storage PPAs totaling ~2.5-GW across multiple U.S. markets.", date: "Dec-25" },
    { companyId: "nextera", company: "NextEra Energy", customer: "WPPI Energy", sector: "Utility", useCase: "Nuclear Supply", segment: "Utility", load: "~170 MW", details: "Long-duration baseload supply secured through a 20-year PPA extension for Point Beach Nuclear capacity.", date: "Dec-25" },
    { companyId: "nextera", company: "NextEra Energy", customer: "Municipal Utilities", sector: "Utility", useCase: "Nuclear Supply", segment: "Utility", load: "~150 MW", details: "Aggregated municipal demand served through approximately 20-year PPAs tied to Seabrook Nuclear capacity.", date: "Dec-25 / Mar-26" }
];
