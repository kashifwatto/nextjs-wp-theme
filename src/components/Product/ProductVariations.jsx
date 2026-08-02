'use client';

import { useState, useMemo } from 'react';

export default function ProductVariations({ 
  product, 
  variations
}) {
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [quantity, setQuantity] = useState(1);

  // Group variations by attributes
  const attributeOptions = useMemo(() => {
    const options = {};
    
    if (!variations || variations.length === 0) return options;

    variations.forEach((variation) => {
      if (variation.attributes) {
        variation.attributes.forEach((attr) => {
          if (!options[attr.name]) {
            options[attr.name] = new Set();
          }
          if (attr.option) {
            options[attr.name].add(attr.option);
          }
        });
      }
    });

    // Convert Sets to Arrays
    Object.keys(options).forEach((key) => {
      options[key] = Array.from(options[key]);
    });

    return options;
  }, [variations]);

  // Find matching variation based on selected attributes
  const matchingVariation = useMemo(() => {
    if (!variations || Object.keys(selectedAttributes).length === 0) {
      return null;
    }

    return variations.find((variation) => {
      if (!variation.attributes) return false;
      
      return Object.entries(selectedAttributes).every(([attrName, attrValue]) => {
        return variation.attributes.some(
          (attr) => attr.name === attrName && attr.option === attrValue
        );
      });
    });
  }, [variations, selectedAttributes]);

  const handleAttributeChange = (attrName, attrValue) => {
    const newAttributes = {
      ...selectedAttributes,
      [attrName]: attrValue,
    };
    setSelectedAttributes(newAttributes);

    // Auto-select the matching variation
    const matching = variations.find((variation) => {
      if (!variation.attributes) return false;
      
      return Object.entries(newAttributes).every(([name, value]) => {
        return variation.attributes.some(
          (attr) => attr.name === name && attr.option === value
        );
      });
    });

    if (matching) {
      setSelectedVariation(matching);
    }
  };

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10) || 1;
    setQuantity(qty);
  };

  const handleAddToCart = () => {
    if (!selectedVariation) {
      alert('Please select all variation options');
      return;
    }

    const itemPrice = parseFloat(displayPrice) || 0;
    const newItem = {
      id: selectedVariation.id,
      name: product.name,
      price: itemPrice,
      quantity,
      image: selectedVariation.image?.src || product.images?.[0]?.src || '',
      variation: selectedVariation.sku || '',
      attributes: selectedAttributes,
    };

    const existingCart = JSON.parse(window.localStorage.getItem('wooCart') || '[]');
    const existingIndex = existingCart.findIndex((item) => item.id === newItem.id);

    if (existingIndex >= 0) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(newItem);
    }

    window.localStorage.setItem('wooCart', JSON.stringify(existingCart));
    alert('Variation added to cart');
  };

  const displayPrice = selectedVariation
    ? parseFloat(selectedVariation.price) || 0
    : parseFloat(product.price) || 0;

  const displayStockStatus = selectedVariation
    ? selectedVariation.stock_status
    : product.stock_status;

  const displayImage = selectedVariation?.image?.src || product.images?.[0]?.src;
  const totalPrice = (displayPrice * quantity).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Attributes Swatches */}
      {Object.entries(attributeOptions).map(([attrName, options]) => (
        <div key={attrName}>
          <label className="font-semibold text-lg mb-3 block">
            {attrName}
          </label>
          <div className="flex flex-wrap gap-3">
            {options.map((option) => (
              <button
                key={`${attrName}-${option}`}
                onClick={() => handleAttributeChange(attrName, option)}
                className={`
                  px-4 py-2 border-2 rounded-lg font-medium transition-all
                  ${
                    selectedAttributes[attrName] === option
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-white text-black hover:border-gray-400'
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Price Section */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-green-600">
            ${displayPrice.toFixed(2)}
          </span>
          {product.regular_price && displayPrice < product.regular_price && (
            <span className="text-lg text-gray-400 line-through">
              ${product.regular_price}
            </span>
          )}
        </div>

        <div className="mt-3 text-sm text-slate-500">
          Total: <span className="font-semibold text-slate-900">${totalPrice}</span>
        </div>
      </div>

      {/* Stock Status */}
      <div className="mt-2">
        {displayStockStatus === 'instock' ? (
          <span className="text-green-600 font-semibold">
            ✔ In Stock
          </span>
        ) : (
          <span className="text-red-600 font-semibold">
            ✖ Out of Stock
          </span>
        )}
      </div>

      {/* Variation Info */}
      {selectedVariation && (
        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p className="font-semibold mb-2">Selected Variation:</p>
          <p>ID: {selectedVariation.id}</p>
          <p>SKU: {selectedVariation.sku || 'N/A'}</p>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-6">
        <label className="font-semibold block mb-2">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          max={99}
          className="border rounded px-3 py-2 w-24"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!selectedVariation || displayStockStatus !== 'instock'}
        className={`
          mt-6 w-full py-4 rounded-lg font-semibold transition-all text-white
          ${
            selectedVariation && displayStockStatus === 'instock'
              ? 'bg-black hover:bg-gray-800 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
          }
        `}
      >
        {selectedVariation ? 'Add to Cart' : 'Select Variation'}
      </button>
    </div>
  );
}
