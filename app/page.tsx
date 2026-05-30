"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { 
  SiJavascript, 
  SiPython, 
  SiTypescript, 
  SiRuby
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FiBookOpen, FiX, FiMenu, FiCode } from "react-icons/fi";

// ─── Types ──────────────────────────────────────────────────────────────

interface OneLiner {
  id: number;
  title: string;
  description: string;
  code: string;
  category: "String" | "Array" | "Math" | "Logic" | "Date";
}

interface Language {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  syntax: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  amazonLink: string;
  gumroadLink: string;
}

// ─── Books Data (from your GitHub) ───────────────────────────────────────

const booksData: Book[] = [
  {
    id: 1,
    title: "250+ Killer JavaScript One-Liners",
    author: "Hernando Abella",
    image: "/250-killer-js.jpg",
    amazonLink: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D442PCLX/",
    gumroadLink: "https://hernandoabella.gumroad.com/l/oqsrp"
  },
  {
    id: 2,
    title: "250+ Killer Python One-Liners",
    author: "Hernando Abella",
    image: "/250-killer-python.jpg",
    amazonLink: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CN51HJQQ/",
    gumroadLink: "https://hernandoabella.gumroad.com/l/rvfsne"
  },
  {
    id: 3,
    title: "250+ Killer TypeScript One-Liners",
    author: "Hernando Abella",
    image: "/250-killer-ts.jpg",
    amazonLink: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CYHZ5QKJ",
    gumroadLink: "https://hernandoabella.gumroad.com/l/amuoc"
  },
  {
    id: 4,
    title: "250+ Killer Ruby One-Liners",
    author: "Hernando Abella",
    image: "/250-killer-ruby.jpg",
    amazonLink: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CXF57XT9",
    gumroadLink: "https://hernandoabella.gumroad.com/l/rdfvl"
  },
  {
    id: 5,
    title: "250+ Killer C# One-Liners",
    author: "Hernando Abella",
    image: "/250-killer-csharp.jpg",
    amazonLink: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D2ZM71J8",
    gumroadLink: "https://hernandoabella.gumroad.com/l/rvfsne"
  }
];

// ─── One-Liners Data by Language ─────────────────────────────────────────

const oneLinersData: Record<string, OneLiner[]> = {
  javascript: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Reverse any string in one line using modern JavaScript.",
      code: `const reverseString = (str) => str.split('').reverse().join('');\n\n// Example:\nconsole.log(reverseString("hello")); // "olleh"`,
      category: "String"
    },
    {
      id: 2,
      title: "Check Palindrome",
      description: "Check if a string reads the same forwards and backwards.",
      code: `const isPalindrome = (str) => str === str.split('').reverse().join('');\n\n// Example:\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("hello")); // false`,
      category: "String"
    },
    {
      id: 3,
      title: "Remove Duplicates from Array",
      description: "Clean an array by removing duplicate values.",
      code: `const removeDuplicates = (arr) => [...new Set(arr)];\n\n// Example:\nconsole.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]`,
      category: "Array"
    },
    {
      id: 4,
      title: "Calculate Average",
      description: "Get the average of all numbers in an array.",
      code: `const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;\n\n// Example:\nconsole.log(average([1, 2, 3, 4, 5])); // 3`,
      category: "Math"
    },
    {
      id: 5,
      title: "Generate Random Hex Color",
      description: "Create a random hexadecimal color code.",
      code: `const randomColor = () => \`#\${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}\`;\n\n// Example:\nconsole.log(randomColor()); // "#3e4a5b"`,
      category: "Math"
    }
  ],
  python: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Reverse any string using Python slicing.",
      code: `reverse_string = lambda s: s[::-1]\n\n# Example:\nprint(reverse_string("hello")) # "olleh"`,
      category: "String"
    },
    {
      id: 2,
      title: "Check Palindrome",
      description: "Check if a string is a palindrome in one line.",
      code: `is_palindrome = lambda s: s == s[::-1]\n\n# Example:\nprint(is_palindrome("racecar")) # True\nprint(is_palindrome("hello")) # False`,
      category: "String"
    },
    {
      id: 3,
      title: "Remove Duplicates",
      description: "Remove duplicate elements from a list.",
      code: `remove_duplicates = lambda lst: list(set(lst))\n\n# Example:\nprint(remove_duplicates([1, 2, 2, 3, 4, 4, 5])) # [1, 2, 3, 4, 5]`,
      category: "Array"
    },
    {
      id: 4,
      title: "Calculate Average",
      description: "Get the average of numbers in a list.",
      code: `average = lambda lst: sum(lst) / len(lst)\n\n# Example:\nprint(average([1, 2, 3, 4, 5])) # 3.0`,
      category: "Math"
    },
    {
      id: 5,
      title: "Generate Random Hex",
      description: "Create a random hexadecimal color.",
      code: `import random; random_color = lambda: f"#{random.randint(0, 0xffffff):06x}"\n\n# Example:\nprint(random_color()) # "#3e4a5b"`,
      category: "Math"
    }
  ],
  typescript: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Type-safe string reversal function.",
      code: `const reverseString = (str: string): string => str.split('').reverse().join('');\n\n// Example:\nconsole.log(reverseString("hello")); // "olleh"`,
      category: "String"
    },
    {
      id: 2,
      title: "Remove Duplicates",
      description: "Type-safe duplicate removal for arrays.",
      code: `const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];\n\n// Example:\nconsole.log(removeDuplicates([1, 2, 2, 3, 4])); // [1, 2, 3, 4]`,
      category: "Array"
    },
    {
      id: 3,
      title: "Check Palindrome",
      description: "Type-safe palindrome checker.",
      code: `const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('');\n\n// Example:\nconsole.log(isPalindrome("racecar")); // true`,
      category: "String"
    },
    {
      id: 4,
      title: "Calculate Average",
      description: "Type-safe average calculator.",
      code: `const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;\n\n// Example:\nconsole.log(average([1, 2, 3, 4, 5])); // 3`,
      category: "Math"
    },
    {
      id: 5,
      title: "Random Hex Color",
      description: "Generate random color with type safety.",
      code: `const randomColor = (): string => \`#\${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}\`;\n\n// Example:\nconsole.log(randomColor());`,
      category: "Math"
    }
  ],
  ruby: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Reverse any string in Ruby.",
      code: `reverse_string = ->(s) { s.reverse }\n\n# Example:\nputs reverse_string.call("hello") # "olleh"`,
      category: "String"
    },
    {
      id: 2,
      title: "Check Palindrome",
      description: "Check if a string is a palindrome.",
      code: `is_palindrome = ->(s) { s == s.reverse }\n\n# Example:\nputs is_palindrome.call("racecar") # true\nputs is_palindrome.call("hello") # false`,
      category: "String"
    },
    {
      id: 3,
      title: "Remove Duplicates",
      description: "Remove duplicate elements from an array.",
      code: `remove_duplicates = ->(arr) { arr.uniq }\n\n# Example:\np remove_duplicates.call([1, 2, 2, 3, 4, 4, 5]) # [1, 2, 3, 4, 5]`,
      category: "Array"
    },
    {
      id: 4,
      title: "Calculate Average",
      description: "Get average of numbers in an array.",
      code: `average = ->(arr) { arr.sum.to_f / arr.length }\n\n# Example:\nputs average.call([1, 2, 3, 4, 5]) # 3.0`,
      category: "Math"
    },
    {
      id: 5,
      title: "Generate Random Hex",
      description: "Create random hex color in Ruby.",
      code: `random_color = -> { "##{format('%06x', rand(0xffffff))}" }\n\n# Example:\nputs random_color.call() # "#3e4a5b"`,
      category: "Math"
    }
  ],
  csharp: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Reverse any string in C# using LINQ.",
      code: `using System.Linq;\n\nFunc<string, string> reverseString = s => new string(s.Reverse().ToArray());\n\n// Example:\nConsole.WriteLine(reverseString("hello")); // "olleh"`,
      category: "String"
    },
    {
      id: 2,
      title: "Check Palindrome",
      description: "Check if a string is a palindrome.",
      code: `using System.Linq;\n\nFunc<string, bool> isPalindrome = s => s.SequenceEqual(s.Reverse());\n\n// Example:\nConsole.WriteLine(isPalindrome("racecar")); // True`,
      category: "String"
    },
    {
      id: 3,
      title: "Remove Duplicates",
      description: "Remove duplicates from an array.",
      code: `using System.Linq;\n\nFunc<int[], int[]> removeDuplicates = arr => arr.Distinct().ToArray();\n\n// Example:\nConsole.WriteLine(string.Join(",", removeDuplicates(new[]{1,2,2,3,4})));`,
      category: "Array"
    },
    {
      id: 4,
      title: "Calculate Average",
      description: "Calculate average of numbers.",
      code: `using System.Linq;\n\nFunc<double[], double> average = arr => arr.Average();\n\n// Example:\nConsole.WriteLine(average(new double[]{1,2,3,4,5})); // 3`,
      category: "Math"
    },
    {
      id: 5,
      title: "Generate Random Hex",
      description: "Create random hex color in C#.",
      code: `using System;\n\nFunc<string> randomColor = () => $"#{new Random().Next(0x1000000):X6}";\n\n// Example:\nConsole.WriteLine(randomColor()); // "#3E4A5B"`,
      category: "Math"
    }
  ]
};

// Languages with icons
const languages: Language[] = [
  { id: "javascript", name: "JavaScript", icon: <SiJavascript size={18} />, color: "#F7DF1E", syntax: "javascript" },
  { id: "python", name: "Python", icon: <SiPython size={18} />, color: "#3776AB", syntax: "python" },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript size={18} />, color: "#3178C6", syntax: "typescript" },
  { id: "ruby", name: "Ruby", icon: <SiRuby size={18} />, color: "#CC342D", syntax: "ruby" },
  { id: "csharp", name: "C#", icon: <TbBrandCSharp size={18} />, color: "#239120", syntax: "csharp" }
];

// ─── Components ─────────────────────────────────────────────────────────

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition font-medium"
    >
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colors = {
    String: "bg-blue-100 text-blue-700",
    Array: "bg-purple-100 text-purple-700",
    Math: "bg-green-100 text-green-700",
    Logic: "bg-yellow-100 text-yellow-700",
    Date: "bg-orange-100 text-orange-700"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[category as keyof typeof colors]}`}>
      {category}
    </span>
  );
}

function OneLinerCard({ oneLiner, syntax }: { oneLiner: OneLiner; syntax: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">
                {oneLiner.id}. {oneLiner.title}
              </h3>
              <CategoryBadge category={oneLiner.category} />
            </div>
            <p className="text-sm text-gray-600">{oneLiner.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400">
            {expanded ? "▼ Click to hide" : "▶ Click to view one-liner"}
          </span>
        </div>
      </div>
      
      {expanded && (
        <div className="border-t border-gray-200">
          <div className="relative">
            <SyntaxHighlighter
              language={syntax}
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "13px",
                borderRadius: 0
              }}
            >
              {oneLiner.code}
            </SyntaxHighlighter>
            <div className="absolute top-2 right-2">
              <CopyButton code={oneLiner.code} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BooksSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [purchaseType, setPurchaseType] = useState<"amazon" | "gumroad">("amazon");

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FiBookOpen className="text-blue-600" />
            <h2 className="font-semibold text-gray-900">Grab your copy here!</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Purchase Type Selector */}
        <div className="flex gap-2 p-4 border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setPurchaseType("amazon")}
            className={`flex-1 px-3 py-1.5 text-sm rounded transition ${
              purchaseType === "amazon"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            🇺🇸 Amazon
          </button>
          <button
            onClick={() => setPurchaseType("gumroad")}
            className={`flex-1 px-3 py-1.5 text-sm rounded transition ${
              purchaseType === "gumroad"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            🚀 Gumroad
          </button>
        </div>
        
        {/* Books List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {booksData.map((book) => (
            <div key={book.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition group">
              <div className="w-full">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-48 flex items-center justify-center bg-gray-100';
                      fallback.innerHTML = '<svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{book.author}</p>
                <a
                  href={purchaseType === "amazon" ? book.amazonLink : book.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block w-full text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition"
                >
                  {purchaseType === "amazon" ? "🇺🇸 Buy on Amazon →" : "🚀 Buy on Gumroad →"}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            ⚡ Killer One-Liners Collection | 5 Languages
          </p>
        </div>
      </div>
    </>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "String", "Array", "Math", "Logic", "Date"];
  const currentOneLiners = oneLinersData[selectedLanguage] || [];
  
  const filteredOneLiners = currentOneLiners.filter(oneLiner => {
    const matchesSearch = oneLiner.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          oneLiner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || oneLiner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentLanguage = languages.find(l => l.id === selectedLanguage)!;

  return (
    <>
      <BooksSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FiCode className="text-blue-600" size={28} />
                <h1 className="text-3xl font-bold text-gray-900">Killer One-Liners</h1>
              </div>
              <p className="text-gray-600 text-sm">
                Powerful one-liner functions for modern developers
              </p>
            </div>
            
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition text-sm text-gray-700 shadow-sm"
            >
              <FiBookOpen size={18} />
              <span className="hidden sm:inline">Get the Book</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition border ${
                  selectedLanguage === lang.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-base">{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition border ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat === "all" ? "📚 All" : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={`Search ${currentLanguage.name} one-liners...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Results Count */}
          <div className="mb-4 text-xs text-gray-500">
            ⚡ {filteredOneLiners.length} killer one-liner(s) found
          </div>

          {/* One-Liners Grid */}
          <div className="space-y-3">
            {filteredOneLiners.map(oneLiner => (
              <OneLinerCard
                key={oneLiner.id}
                oneLiner={oneLiner}
                syntax={currentLanguage.syntax}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredOneLiners.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              <FiCode className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>No one-liners found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}