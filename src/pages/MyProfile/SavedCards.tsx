import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Card {
  id: number;
  cardtype: string;
  cardnumber: string;
}

const SavedCards: React.FC = () => {
  const [cards, setcards] = useState<Card[]>([
    {
      id: 1,
      cardtype: 'Master Card',
      cardnumber: '4517 3949 XX45 6X83'
    },
    {
      id: 2,
      cardtype: 'Visa card',
      cardnumber: '3891 6263 9XXX 8292'
    },
  ]);

  const handleDelete = (id: number) => {
    setcards(cards.filter(paymentcard => paymentcard.id !== id));
  };

  const AddressCard: React.FC<{ paymentcard: Card }> = ({ paymentcard }) => (
    <div className="py-6 px-4 border-b last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-[17px] font-semibold text-black">{paymentcard.cardtype}</h3>
          <p className="text-[15px] text-gray-700 pt-1">{paymentcard.cardnumber}</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleDelete(paymentcard.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-red-500 bg-red-50"
          >
            <Trash2 size={18} />
            <span className="text-[14px]">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl w-full">
      <button 
        className="w-56 bg-black text-white rounded-lg py-3 mb-6 flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
      >
        <Plus size={20} />
        <span className="text-[15px] font-medium">Add New Card</span>
      </button>

      <div className="bg-white rounded-[14px] ">
        {cards.map((paymentcard, index) => (
          <AddressCard key={index} paymentcard={paymentcard} />
        ))}
      </div>
    </div>
  );
};

export default SavedCards;