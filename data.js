const DASHBOARD_DATA = {
    macro: {
        totalMarketCap: 551.4, // Billions
        totalRevenue: 145.49, // Billions
        avgCapex: 74, // Billions (rough avg/total depending on view)
        totalCustomers: 42, // Millions
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
            customers: 5.9,
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
            customers: 8.7,
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
            customers: 9.0,
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
            customers: 8.0,
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
            customers: 2.0, // Mostly C&I / Wholesale
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

        { id: 6, company: 'nextera', category: 'deals', date: '2025-12-08',
          title: 'NextEra Energy Resources to Acquire Symmetry Energy Solutions from Energy Capital Partners',
          source: 'NextEra Energy Newsroom',
          link: 'https://newsroom.nexteraenergy.com/2025-12-08-NextEra-Energy-Resources-to-Acquire-Symmetry-Energy-Solutions-from-Energy-Capital-Partners,-Expanding-Natural-Gas-Capabilities' },

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
