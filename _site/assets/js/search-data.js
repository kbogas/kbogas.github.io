// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Past and present projects and collaborations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-dice-participated-in-the-ml-esg-3-shared-task-finnlp-lrec-coling-2024-ranking-6th-out-of-31-systems-check-our-findings-here",
          title: 'DICE participated in the ML-ESG-3 Shared task @ FinNLP - LREC-COLING-2024 ranking 6th...',
          description: "",
          section: "News",},{id: "news-our-new-work-entrant-a-large-financial-dataset-for-table-understanding-has-been-published-in-nature-s-scientific-data-check-out-the-paper-and-the-code",
          title: 'Our new work: ENTRANT: A Large Financial Dataset for Table Understanding has been...',
          description: "",
          section: "News",},{id: "news-dice-goes-icaif-2024-to-present-our-work-on-bankruptcy-prediction",
          title: 'DICE goes @ ICAIF-2024 to present our work on bankruptcy prediction🚀!',
          description: "",
          section: "News",},{id: "news-are-you-working-with-financial-data-and-imbalanced-noisy-labels-you-might-want-to-check-our-recently-published-work-calibrating-tabtransformer-for-financial-misstatement-detection-spoiler-using-focal-loss-in-springer-nature-applied-intelligence",
          title: 'Are you working with financial data and imbalanced/noisy labels? You might want to...',
          description: "",
          section: "News",},{id: "news-5-msc-students-data-sciene-master-completed-their-master-theses-on-fintech-topics-co-supervised-by-dice-and-qualco",
          title: '5 MSc Students (Data Sciene Master) completed their Master theses on FinTech topics,...',
          description: "",
          section: "News",},{id: "news-dice-participated-in-the-succesful-greek-proposal-for-pharos-one-of-the-first-artificial-intelligence-ai-factories-in-europe",
          title: 'DICE participated in the succesful Greek proposal for Pharos, one of the first...',
          description: "",
          section: "News",},{id: "news-welcome-to-the-new-dice-group-website",
          title: 'Welcome to the new DICE group website🎉!',
          description: "",
          section: "News",},{id: "news-dice-in-the-greek-news-the-demokritos-qualco-fellowship-programme-was-featured-in-cnn-greece",
          title: 'DICE in the Greek News📰! The “Demokritos-Qualco Fellowship” programme was featured in CNN...',
          description: "",
          section: "News",},{id: "news-dice-in-the-greek-news-again-check-out-the-discussion-about-our-fellowship-programme-in-iefimerida",
          title: 'DICE in the Greek News📰 again! Check out the discussion about our fellowship...',
          description: "",
          section: "News",},{id: "news-dice-participated-in-the-athens-half-marathon-both-in-the-21-5km-and-5km-races",
          title: 'DICE participated in the Athens Half Marathon🏃, both in the 21.5km and 5km...',
          description: "",
          section: "News",},{id: "news-our-latest-survey-machine-learning-for-identifying-risk-in-financial-statements-a-survey-has-been-just-accepted-in-acm-computing-surveys",
          title: 'Our latest survey: Machine Learning for Identifying Risk in Financial Statements: A Survey...',
          description: "",
          section: "News",},{id: "news-dice-participated-in-the-pharos-ai-factory-kick-off-meeting-one-of-europe-s-first-13-ai-factories-see-more-details-here",
          title: 'DICE participated in the Pharos AI Factory kick-off meeting, one of Europe’s first...',
          description: "",
          section: "News",},{id: "news-dice-placed-1st-in-the-field-of-research-classification-shared-task-hosted-by-the-natural-scientific-language-processing-and-research-knowledge-graphs-nslp-2025-workshop-eswc2025-stay-tuned-for-the-corresponding-paper-utiling-llms-for-zero-shot-classification",
          title: 'DICE placed 1st in the Field of Research Classification shared task, hosted by...',
          description: "",
          section: "News",},{id: "news-dice-will-be-presenting-in-the-38th-ieee-international-symposium-on-computer-based-medical-systems-cbms-its-latest-work-on-predicting-multi-class-drug-drug-interactions-using-a-disease-specific-knowledge-graph-as-a-full-oral-stay-tuned-for-the-full-paper",
          title: 'DICE will be presenting in the 38th IEEE International Symposium on Computer-Based Medical...',
          description: "",
          section: "News",},{id: "news-dice-at-ecml-pkdd-dimitris-kelesis-will-be-presenting-two-of-his-works-on-gnns-and-oversmoothing-partially-trained-graph-convolutional-networks-resist-oversmoothing-and-analyzing-the-effect-of-residual-connections-on-oversmoothing-in-graph-neural-networks-catch-him-in-porto-in-september",
          title: '🎉 DICE at ECML-PKDD! Dimitris Kelesis will be presenting two of his works...',
          description: "",
          section: "News",},{id: "news-dice-has-a-new-member-nick-reskos-nice-to-have-you-onboard",
          title: 'DICE has a new member🎉! Nick Reskos nice to have you onboard!',
          description: "",
          section: "News",},{id: "news-dice-at-icaif-2025-we-re-excited-to-share-that-two-new-papers-from-the-team-have-been-accepted-positive-unlabeled-learning-for-financial-misstatement-detection-under-realistic-constraints-and-a-multimodal-alignment-based-anomaly-detection-method-for-bankruptcy-prediction-looking-forward-to-the-discussions-in-singapore",
          title: '🚀 DICE at ICAIF-2025! We’re excited to share that two new papers from...',
          description: "",
          section: "News",},{id: "projects-complex-network-analysis",
          title: 'Complex Network Analysis',
          description: "The CNA group aims to bring together scientists that want to share research ideas, experimental results, expertise, and knowledge around the area of Complex Networks, probabilistic graphs, and related research topics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/actions_cna/";
            },},{id: "projects-md-amp-a-and-auditors-opinion",
          title: 'MD&amp;amp;A and Auditors Opinion',
          description: "Extension of the ECL Dataset with Auditors Opinion for bankruptcy prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataset_ecl/";
            },},{id: "projects-entrant",
          title: 'ENTRANT',
          description: "A Large Financial Dataset for Table Understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataset_entrat/";
            },},{id: "projects-financial-narrative-summarization",
          title: 'Financial Narrative Summarization',
          description: "FNS 2023 Training and validation data for the Greek language",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataset_fns/";
            },},{id: "projects-multimodal-dataset-for-mabad",
          title: 'Multimodal Dataset for MABAD',
          description: "A Multimodal Dataset of Financial Disclosures, MD&amp;A, and Audit Opinions with Next-Year Bankruptcy Labels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataset_mabad/";
            },},{id: "projects-positive-unlabeled-learning-dataset",
          title: 'Positive-Unlabeled Learning Dataset',
          description: "A dataset with financial features and the corresponding Misstatement labels for the period 2000-2014, with temporal splits and realistic label noise.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataset_pufinance/";
            },},{id: "projects-dice-demos",
          title: 'DICE Demos',
          description: "Explore our demos on financial applications!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/demo_icaif_bpao/";
            },},{id: "projects-ernst-amp-young-demokritos-center-of-excellence-in-artificial-intelligence",
          title: 'Ernst &amp;amp; Young - Demokritos Center of Excellence in Artificial Intelligence',
          description: "This multi-million euro investment aims at creating a Center of Excellence, which will become a point of reference for Document Intelligence globally, connecting researchers, scientists and AI professionals with business experts from a wide range of industrial sectors, and using emerging technologies to accelerate Innovation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_ey/";
            },},{id: "projects-qualco-master-theses-fellowships",
          title: 'Qualco Master Theses Fellowships',
          description: "Co-supervision of 5 Master Thesis on FinTech topics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_master_thesis/";
            },},{id: "projects-pharos-the-greek-ai-factory",
          title: 'Pharos The Greek AI Factory',
          description: "Pharos is one of the first thirteen AI “factories” in Europe and is a strategically important initiative, strengthening competitiveness, developing reliable AI applications and promoting sustainability-driven innovation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_pharos/";
            },},{id: "projects-demokritos-qualco-fellowship-programme",
          title: 'Demokritos-Qualco Fellowship Programme',
          description: "The pioneering “Demokritos-Qualco Fellowship” programme started in 2021 and is a 5-year industrial R&amp;D collaboration that aims to advance AI-driven research in FinTech with the scientific supervision of NCSR Demokritos and the financial support and domain expertise of QUALCO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_qualco/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
