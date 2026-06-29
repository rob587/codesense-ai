import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ReviewResults from "../components/ReviewResults";

function App() {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header */}
        <header className="border-b border-gray-800 px-8 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-indigo-400">
                CodeSense AI
              </h1>
              <p className="text-gray-500 text-sm">AI-powered code reviewer</p>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left — Code Editor */}
            <CodeEditor
              onReview={(data) => setReview(data)}
              onLoading={(val) => setLoading(val)}
            />

            {/* Right — Results */}
            <ReviewResults review={review} loading={loading} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
