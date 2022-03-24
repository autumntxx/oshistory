let INFO = [
    { year: '1940s', data: [
        {
            title: 'The ENIAC is created',
            text: 'It was originally used to create firing tables for the military. Programmed manually using switches, which could take days.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ENIAC_Penn1.jpg/796px-ENIAC_Penn1.jpg?20181112040822',
                caption: 'The ENIAC',
                source: 'https://en.wikipedia.org/wiki/ENIAC',
            },
        },
    ]},
    { year: '1950s', data: [
        {
            title: 'Magnetic tape drives are created',
            text: 'Used magnetic tape for storage. At the time, it was the most common drive, and was written to using commands.',
        },
        {
            title: 'The IBM 701 is created',
            text: 'Ran on IBM speed code, which was a basic assembly language. Had 1,024 words of RAM.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IBM_701console.jpg/800px-IBM_701console.jpg',
                caption: 'The control panel for the IBM 701',
                source: 'https://en.wikipedia.org/wiki/IBM_701',
            },
        },
        {
            title: 'FORTRAN was created',
            text: 'Was an early compiler, stood for FORMula TRANslator.',
        },
        {
            title: 'HDDs are created',
            text: 'Stored data on a physical spinning disk. HDD stands for Hard Disk Drive.',
        },
    ]},
    { year: '1960s', data: [
        {
            title: 'IBM developed SABRE for American Airlines',
            text: 'It used 2 linked computers, and was made to streamline airline reservations. Agents could interact with it through typewriter terminals.',
        },
        {
            title: 'DOS was created',
            text: 'A basic command line operating system that added names for files. Stands for Disk Operating System.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ms-dosdir.png/640px-Ms-dosdir.png',
                caption: 'A picture of the DOS terminal',
                source: 'https://en.wikipedia.org/wiki/MS-DOS',
            }
        },
        {
            title: 'Multics',
            text: 'The first operating system to have seperate directories for users, a hierarchical file system, and access control. The name stood for Multiplexed Information and Computing Service.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Multics-Login.png',
                caption: 'The MULTICS login screen',
                source: 'https://en.wikipedia.org/wiki/Multics',
            }
        },
        {
            title: 'HDDs became popular',
            text: 'Hard Disk Drives became popular after being invented in 1956. Tape drives were mostly used for backups.',
        },
        {
            title: 'The first minicomputers',
            text: 'Minicomputers are smaller versions of computers. Instead of taking up a whole room, they could be as small as a fridge.',
        },
    ]},
    { year: '1970s', data: [
        {
            title: 'Cheaper computers',
            text: 'You could now buy minicomputers for under $1000, and you could buy regular computers for under $10,000!',
        },
        {
            title: 'Unix was created',
            text: 'Dennis Ritchie and Ken Thompson created UNIX from their ideas after Bell Labs stopped working on Multics. UNIX is a pun of Multics. It was the first OS to use user/group IDs.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Simh-pdp11-unix-sysiii.png',
                caption: 'The UNIX terminal',
                source: 'https://en.wikipedia.org/wiki/Unix',
            },
        },
        {
            title: 'Networking was introduced',
            text: 'Universities become linked by ARPANET and BITNET.',
        },
        {
            title: 'Window managers were first developed',
            text: 'Window managers let users open multiple "windows" side by side, this became popular later (in the 1980s).',
        },
        {
            title: 'The Intel 4004 Microprocessor was created',
            text: 'It was as powerful as the first electronic computer ever built, which took up an entire room. Its circut lines were only 10 microns wide!',
        },
    ]},
    { year: '1980s', data: [
        {
            title: 'The IBM personal computer',
            text: 'IBM released their first personal computer in 1981. It ran PCDOS (a command line OS), which was later bought by Microsoft.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/PC_DOS_1.10_screenshot.png/300px-PC_DOS_1.10_screenshot.png',
                caption: 'The PCDOS terminal',
                source: 'https://en.wikipedia.org/wiki/IBM_PC_DOS',
            },
        },
        {
            title: 'The first release of Linux',
            text: 'Linus Torvalds developed the operating system called Linux. It was designed to be a lightweight open-source clone of UNIX. Many computers still run Linux today. Linus Torvalds later developed an open-source version control system called git, which I am using to make this website.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tux%2C_gray%EF%BC%8Fgrey_background.png/220px-Tux%2C_gray%EF%BC%8Fgrey_background.png',
                caption: 'Tux - The Linux mascot',
                source: 'https://en.wikipedia.org/wiki/Tux_(mascot)',
            },
        },
        { 
            title: 'More UNIX variants',
            text: 'Companies made their own versions of UNIX to run on their hardware. These companies included IBM, HP, and Sun Microsystems.',
        },
        {
            title: 'Microsoft Windows',
            text: 'The first verison of Windows was released in 1985. It was a small 16-bit graphical interface that ran on top of PCDOS.',
        },
        {
            title: 'Commodore 64',
            text: 'The Commodore 64 was made by Commodore International and started to gain popularity around 1982. It was made to be an affordable personal computer, and ran it\'s own operating system called Commodore.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Commodore-64-Computer-FL.png/1920px-Commodore-64-Computer-FL.png',
                caption: 'The Commodore 64',
                source: 'https://simple.wikipedia.org/wiki/Commodore_64',
            },
        }
    ]},
    { year: '1990s', data: [
        {
            title: 'Windows 95',
            text: 'In 1995, Windows 95 was released. It added a start menu, plug and play drivers (which let the user add and remove peripherals without restarting), and a 32-bit enviroment.',
        },
        {
            title: 'Rhapsody',
            text: 'Rhapsody is a closed-source operating system developed by Apple to run on their own hardware.'
        },
        {
            title: 'Windows NT',
            text: 'It was designed to be a portable operating system, and the first OS be completely 32 bit. The NT stands for New Technology. It added the Windows Shell, Group Policies, NTFS, BitLocker, the Microsoft Store, Windows Update, and Hyper-V. It was also the first Windows OS to have a hybrid kernel, which combinded aspects of a microkernel and a monolitic kernel.',
            image: {
                url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OS-structure2.svg/1280px-OS-structure2.svg.png',
                caption: 'The different types of kernels',
                source: 'https://en.wikipedia.org/wiki/Hybrid_kernel',
            },
        },
        {
            title: 'Windows 7',
            text: 'A major release of Windows NT. Added many sound schemes, the Remote Desktop Protocal, Microsoft Vitual PC, Internet Explorer 8, and Windows Defender.'
        },
    ]},
    { year: '2000s', data : [
        {
            title: 'Windows XP',
            text: 'Another operating system by Microsoft based on Windows NT. It introduced plug and play drivers, wirless networks, and grouping on the task bar.',
            image: {
                url: 'https://upload.wikimedia.org/wikipedia/en/6/64/Windows_XP_Luna.png',
                caption: 'The Windows XP layout and color scheme',
                source: 'https://en.wikipedia.org/wiki/Windows_XP#New_and_updated_features',
            },
        },
        {
            title: 'The rise of smartphones',
            text: 'Smartphones started becoming more "smart". Currently, 85% of all smartphones run the Linux kernel.',
        },
    ]},
    { year: '2010s', data: [
        {
            title: 'Cloud services are used',
            text: 'Operating systems began to add cloud services inside of them. Some examples are Chrome OS, and later Windows.',
        },
        {
            title: 'Windows 10',
            text: 'Windows 10 is once again based on Windows NT. It was made to be user-friendly and good for gaming. After 5 years of it\'s release, it was running on 1 billion devices.'
        }
    ]},
    { year: '2022', data: [
        {
            title: 'Making this website',
            text: 'I made this website using Vanilla JS & the Document API (react bad). For version control, I use Git with Netlify to automatically publish a new version with every commit, and Cloudflare for some basic caching.',
        },
        {
            title: 'Other things I made',
            text: 'You can find a list of my social media profiles and projects at <a href="https://kc5f.xyz">kc5f.xyz</a>.',
        },
    ]},
]