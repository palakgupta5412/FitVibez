export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About Us',
      href: '#about',
    },
    {
      id: 3,
      name: 'Our Plans',
      href: '#plans',
    },
    {
      id: 4,
      name: 'Reviews',
      href: '#reviews',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      img: 'assets/review1.png',
      review:
        'Transforming my health and mindset with this program has been life-changing. I never thought I’d feel this strong and confident!',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      img: 'assets/review2.png',
      review:
        'I’ve never seen results like this before! The personalized approach really works, and I’m now stronger than I’ve ever been.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      img: 'assets/review3.png',
      review:
        'Joining this fitness community was the best decision I made. The coaches are amazing and truly invested in your progress. I’ve lost 20 pounds and gained so much more confidence!',
    },
    {
      id: 4,
      name: 'Ether Smith',
      img: 'assets/review4.png',
      review:
        'The guidance and support I received from the trainers made all the difference. I’ve improved my endurance, strength, and overall health. Thank you for pushing me to my limits!',
    },
  ];
  
  export const plans = [
    {
      title: 'Bronze Plan: Starter Fitness Package',
      desc: 'Perfect for beginners, this entry-level plan offers access to our gym, essential equipment, and group fitness classes. You will also receive limited guidance from our trainers to kickstart your fitness journey.',
      subdesc: 
      "Personal Trainer: 1 session per month , Training Hours: Access to gym during off-peak hours , Equipment: Standard gym equipment ,\nFacilities: Gym and basic amenities ,\nCost: Affordable monthly fee" ,
      
      texture: '/assets/B.png',
      logo: '/assets/bronze.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      
    },
    {
      title: 'Silver Plan: Intermediate Fitness Package',
      desc: 'Ideal for those looking to take their fitness to the next level, the Silver plan offers more time with personal trainers, plus access to specialized equipment and additional fitness classes.',
      subdesc:
        'Personal Trainer: 2 sessions per month \nTraining Hours: Extended hours access\nEquipment: Premium gym equipment and machines\nFacilities: Gym + locker rooms, sauna, and steam rooms\nCost: Moderate monthly fee',
      texture: '/assets/S.png',
      logo: '/assets/silver.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      
    },
    {
      title: 'Gold Plan: Advanced Fitness Package',
      desc: 'A comprehensive plan for serious fitness enthusiasts. With dedicated time with personal trainers, unlimited gym access, and advanced equipment, you’ll have everything you need to accelerate your results.',
      subdesc:
        'Personal Trainer: 4 sessions per month\nTraining Hours: Full access to gym during peak and off-peak hours\nEquipment: Full access to premium gym equipment and machines\nFacilities: Gym, locker rooms, sauna, steam rooms, and exclusive fitness classes',
      texture: '/assets/G.png',
      logo: '/assets/gold.png',
      logoStyle: {
        backgroundColor: '#0E0E10',
        background:
          'linear-gradient(0deg, #0E0E10, #0E0E10), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(200, 400, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      
    },
   
    {
      title: 'Platinum Plan: Elite Fitness Package',
      desc: 'For those who want the ultimate fitness experience, the Platinum plan offers unlimited personal training, exclusive facilities, and priority booking for equipment and classes. Tailored to your personal goals, this plan offers a VIP fitness journey.',
      subdesc:
        'Personal Trainer: Unlimited sessions with a dedicated trainer\nTraining Hours: 24/7 gym access with priority reservations\nEquipment: Full access to premium, cutting-edge gym equipment\nFacilities: VIP access to all facilities including spa, exclusive classes, and recovery areas\nCost: Exclusive high-end fee',
      
      texture: '/assets/P.png',
      logo: '/assets/platinum.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];