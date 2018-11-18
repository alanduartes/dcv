export class Profile 
{
    name: string = '';
    email: string = '';
    phone: string = '';
    birthDate: Date = null;
    height: number = 0;
    weight: number = 0;
    smoker: boolean = false;

    photo1: string = '';
    photo2: string = '';
    photo3: string = '';
    photo4: string = '';

    professional = [];
    educational = [];
    courses = [];
    knowledge = {};

    constructor()
    {
        this.initProfile();
        this.initProfessionalProfile();
        this.initEducationalProfile();
        this.initCourses();
        this.initKnowledge();
    }

    initProfile()
    {
        this.name = 'ALAN DUARTE';
        this.email = 'alanduartes@gmail.com';
        this.phone = '(41) 9 9667-3259';
        this.birthDate = new Date('1989-09-25');
        this.height = 1.76;
        this.weight = 73;
        this.smoker = false;

        this.photo1 = '1.jpg';
        this.photo2 = '2.jpg';
        this.photo3 = '3.jpg';
        this.photo4 = '4.jpg';
    }

    initProfessionalProfile()
    {
        this.professional = [
            {
                icoCompany: '',
                company: 'Atual Card',
                function: 'Programador PHP',
                start: new Date('2015-10-01'),
                end: null,
                description: "Desenvolvimento de novas features e manutenção das lojas (e-commerce) e de sistemas internos para controle da produção da empresa em PHP com Zend Framework 1 e 2. SGBD MySQL – Após um pouco mais de 1 ano de empresa, recebi a oportunidade de trabalhar na equipe de B.I onde tive contato com a linguagem R para realizar tarefas de ETL."
            },
            {
                icoCompany: '',
                company: 'Corinfo',
                function: 'Programador PHP',
                start: new Date('2014-09-01'),
                end: new Date('2015-09-01'),
                description: "Correção de bugs e novos recursos para um ERP (PHP). Análise e alterações no Banco de Dados (MySql) e nas views. Ambiente Windows."
            },
            {
                icoCompany: '',
                company: 'Abix Tecnologia',
                function: 'Programador PHP',
                start: new Date('2012-10-01'),
                end: new Date('2014-07-01'),
                description: "Desenvolvimento de sistemas em PHP com banco de dados Oracle e MySql para uso interno dos funcionários; Modelagem de dados; desenvolvimento e manutenção do site. Rotina de trabalho em ambiente Linux, distribuição Ubuntu."
            },
            {
                icoCompany: '',
                company: 'Daiken Software',
                function: 'Estagiário',
                start: new Date('2011-10-01'),
                end: new Date('2012-09-01'),
                description: "Auxílio no desenvolvimento de aplicações Java EE, C++ utilizando os SGBDs Oracle, Postgres, teste de aplicações e análise de código."
            }
        ];
    }

    initEducationalProfile()
    {
        this.educational = [
            {
                icoInstitution: '',
                institution: 'UFPR - Universidade Federal do Paraná',
                conclusion: '2014'
            }
        ];
    }

    initCourses()
    {
        this.courses = [
            {
                icoInstitution: '',
                institution: 'Udacity',
                name: 'Full Stack Web Developer',
                duration: '6 Months',
                site: 'https://br.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
            },
            {
                icoInstitution: '',
                institution: 'Elaborata',
                name: 'MySQL',
                duration: '',
                site: ''
            },
            {
                icoInstitution: '',
                institution: 'UTFPR',
                name: 'Linux II',
                duration: '',
                site: ''
            },
            {
                icoInstitution: '',
                institution: 'FACEAR',
                name: 'Linux I',
                duration: '',
                site: ''
            },
        ];
    }

    initKnowledge()
    {
        // TAG : years
        this.knowledge = 
            [
               {
                    description: 'PHP',
                    ico: '',
                    years: 7,
                    category: 'backend'                    
                },
                {
                    description: "NodeJS",
                    ico: '',
                    years: 1,
                    category: 'backend'
                },
                {
                    description: "Zend Framework 1",
                    ico: '',
                    years: 3,
                    category: 'backend'
                },
                {
                    description: "Zend Framework 3",
                    ico: '',
                    years: 3,
                    category: 'backend'
                },
                {
                    description: "Symfony",
                    ico: '',
                    years: 1,
                    category: 'backend'
                },
                {
                    description: "CodeIgniter",
                    ico: '',
                    years: 1,
                    category: 'backend'
                },
                {
                    description: "R",
                    ico: '',
                    years: 2,
                    category: 'backend'
                },
                {
                    description: "Python",
                    ico: '',
                    years: 1,
                    category: 'backend'
                },
                {
                    description: "Flask",
                    ico: '',
                    years: 1,
                    category: 'backend'
                },
                {
                    description: "Doctrine",
                    ico: '',
                    years: 2,
                    category: 'backend'
                },
                {
                    description: "MySQL",
                    ico: '',
                    years: 5,
                    category: 'db'
                },
                {
                    description: "Oracle",
                    ico: '',
                    years: 2,
                    category: 'db'
                },
                {
                    description: "HTML",
                    ico: '',
                    years: 6,
                    category: 'frontend'
                },
                {
                    description: "CSS",
                    ico: '',
                    years: 5,
                    category: 'frontend'
                },
                {
                    description: "Java Script",
                    ico: '',
                    years: 6,
                    category: 'frontend'
                },
                {
                    description: "Type Script",
                    ico: '',
                    years: 1,
                    category: 'frontend'
                },
                {
                    description: "Angular",
                    ico: '',
                    years: 1,
                    category: 'frontend'
                },
                {
                    description: "Linux",
                    ico: '',
                    years: 5,
                    category: 'os'
                },
                {
                    description: "GIT",
                    ico: '',
                    years: 4,
                    category: 'versiontool'
                },
                {
                    description: "SVN",
                    ico: '',
                    years: 4,
                    category: 'versiontool'
                }                
            ]
        ;
    }
}