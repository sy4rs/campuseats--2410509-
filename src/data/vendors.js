const vendors = [
  {
    id: 'my-restaurant',
    name: 'Restoran Maju',
    location: 'Mahallah Uthman, Ground Floor',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'my-1', name: 'Pizza', description: 'Delicous Pizza with various toppings', price: 11, category: 'Pizza', available: true },
      { id: 'my-2', name: 'Mi bandung', description: 'Mdelicious mi bandung', price: 6, category: 'Noodles', available: true },
      { id: 'my-3', name: 'Mi goreng mamak', description: 'Your typical mi goreng mamak kaw', price: 6, category: 'Noodles', available: true },
      { id: 'my-4', name: 'Air teh O Ais limau', description: '...', price: 3.0, category: 'Drinks', available: false },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [

      { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
      { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },

    ],
  },
]
 
export default vendors