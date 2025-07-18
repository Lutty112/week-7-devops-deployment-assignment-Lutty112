import { useEffect, useState } from 'react';
import api from '../services/api'; 
import { useAuth } from '../context/AuthContext';
import PumpkinSoup from '../assets/PumpkinSoup.jpeg';

export default function Dashboard() {
  const { user } = useAuth();

  // Mocked or fetched user stats
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalCategories: 0,
    favoriteRecipes: 0,
  });

  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats and recent posts
    async function fetchData() {
      try {
        const postsRes = await api.get('/posts');
        const categoriesRes = await api.get('/categories');
        
        setStats({
          totalPosts: postsRes.data.length,
          totalCategories: categoriesRes.data.length,
          favoriteRecipes: 5,
        });

        // Get last 2 posts sorted by creation date
        const recent = postsRes.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 2);
        setRecentPosts(recent);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: Main dashboard content, takes most space */}
        <div className="flex-1 space-y-8">
          <header className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-yellow-700">
                Hello, {user?.name || 'Chef'}!
              </h1>
              <p className="text-gray-900 mt-1">
                Ready to explore or share delicious recipes today?
              </p>
            </div>
            
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-yellow rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-yellow-700">Total Recipes</h2>
              <p className="mt-2 text-3xl font-bold text-yellow-700">{stats.totalPosts}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-yellow-700">Categories</h2>
              <p className="mt-2 text-3xl font-bold text-yellow-700">{stats.totalCategories}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-yellow-700">Favorite Recipes</h2>
              <p className="mt-2 text-3xl font-bold text-yellow-700">{stats.favoriteRecipes}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Recent Recipes</h2>
            {loading ? (
              <p>Loading recent recipes...</p>
            ) : recentPosts.length === 0 ? (
              <p className="text-yellow-600">No recent recipes found. Start by creating one!</p>
            ) : (
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li
                    key={post._id}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col sm:flex-row justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-700">{post.title}</h3>
                      <p className="text-gray-900 mt-1 line-clamp-2 max-w-md">{post.description}</p>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <a
                        href={`/posts/${post.slug}`}
                        className="text-yellow-700 hover:underline font-semibold"
                      >
                        View Recipe →
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="bg-yellow-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Need more Info?</h3>
            <p className="mb-4 text-yellow-700">
              Check out our{' '}
              <a href="/help" className="underline font-bold hover:text-yellow-900">
                Help Center
              </a>{' '}
              or browse{' '}
              <a href="/categories" className="underline font-bold hover:text-yellow-900">
                categories
              </a>
              .
            </p>
            <button className="bg-yellow-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-900 transition">
              Explore Now
            </button>
          </section>
        </div>

        {/* RIGHT: Demo image */}
        <div className="hidden lg:block w-100 h-120 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
          <img
            src={PumpkinSoup}
            alt="App demonstration"
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="mt-2 text-center text-yellow-700 font-semibold">
            App Demo Screenshot
          </p>

        </div>
      </div>
     </div>
  );
}
