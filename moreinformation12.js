/*

ELECTRICAL ENGINEERING

Combinators

come back to Combinatorics of Electrical Networks //// university
of waterloo

learn about sensorinput

Abstraction and modularity are important
in the constructing of big systems

CascadeSM: make new SM by cascading two SM's /// look into all this///////
ParallelSM: make new SM by running two SM's in parallel
Select: combine two inputs to get one output

A state machine is a thing that works in steps.
On every step the state machine gets a new input then
based on that input and its memory of what's come before,
the state machine decides to do something it generates an 
output and then the process repeats.

this is maybe about abstraction ///////

PCAP 
Primitives - Combination - Abstraction - Patterns

Discrete-time feedback and control

difference equations, system functions, controllers

Resistive networks and op amps

KVL, KCL, Op-Amps, Thevenin equivalents

Phototransitor //////////// look all these up

Light tracking system

Motor servo controller

Sonar sensors tell you how far away something that reflects the
ultrasonic wave is

REACT 

import React, { useState } from "react";

function countInitial() {
  console.log('run function')
  return 4

}

function App() {
  const [count, setCount] = useState(countInitial()) //// IMPORTANT

  function decrementCount() {
    setCount( prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    
    </>
  )
}

export default App;

import React, { useState } from "react";





function App() {
  const [state, setState] = useState({ count: 4, theme: 'blue'}) //// IMPORTANT
  const count = state.count
  const theme = state.theme


  function decrementCount() {
    setState( prevState => {
      return { ...prevState, count: prevState.count - 1 }
    }) // update old stuff //////
  }

  function incrementCount() {
   // setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    
    </>
  )
}

export default App;


import React, { useState } from "react";





function App() {
  const [count, setCount] = useState(4) 
  const [theme, setTheme] = useState('blue') 
  function decrementCount() {
    setCount(prevCount => prevCount - 1) 
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
     <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    
    </>
  )
}

export default App;

cannot put hooks inside of if statements,cannot put them
inside of functions, cannot put them in loops, cannot be 
nested in anything

You can only use hooks inside of functions components
 cannot use them 
for class components

For jest and stuff

might have to stop app to use npm run test
and writing true or false in thing determines how it will
act.

packages for test come defaultly with create-react-app

npm i --save-dev @testing-library/react react-test-renderer


pressing u will update the snapshot made

CODEWARS

# Ruby’s Eleven 
# Problem URL: http://www.codewars.com/kata/rubys-eleven/ruby 
# Short desc: Find a bug in ruby code and abuse it to override admin's password

module Frontend

  def given_credentials
    pass = 'yoAQNi6fKeC9I'
    pass.instance_eval do 
      def crypt(*args)
        'yoAQNi6fKeC9I'
      end
    end
    sc = SecureCredentials.new('admin',  pass)
    sc.instance_eval do 
      def eql?(a)
        a.password = 'h4xx0r3d'.crypt('you_cannot_break_this')
      end
    end
    sc
  end
end

DUTCH

my biggest fear is = mijn grootste angst is

I've waited so long = Ik heb zo lang gewacht

Google's free service instantly translates words, sentences,
and web pages between english and more than 100 other languages.
= De gratis service van google vertaalt woorden, zinnen
en webpagina's onmiddlellijk tussen het engels en meer dan
100 andrere talen

Werk jij voor hem? Heeft hij je gestuurd? = Do you work for him? Did he send you?

the claws = de klauwen

portuguese = Portugees

a box = een doos

don't you dare interrupt me = durf mij niet te onderbreken

you are in custody = u bent in hechtenis

I'm watching a tutorial = Ik kijk naar een tutorial

a squirrel = een eekhoorn

let's keep in touch = laten we contact houden

CODEWARS

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <map>
#include <vector>
#include <iostream>


using namespace std;

const int N = 7;
const int SIDES = 4;
const int MASK = (1 << N) - 1;
const int s[SIDES * N] = {0,1,2,3,4,5,6,6,13,20,27,34,41,48,48,47,46,45,44,43,42,42,35,28,21,14,7,0};
const int inc[SIDES * N] = {7,7,7,7,7,7,7,-1,-1,-1,-1,-1,-1,-1,-7,-7,-7,-7,-7,-7,-7,1,1,1,1,1,1,1};
int possible[N * N], results[N][N];
bool vis[N * N];
vector<int> my_clues;

void set_value(int x, int v) {
    int m = MASK ^ (1 << v);
    int s_row = x - x % N;
    int s_col = x % N;
    for (int i = 0; i < N; i++) {
        possible[s_row + i] &= m;
        possible[s_col + i * N] &= m;
    }
    possible[x] = 1 << v;
}

int check_unique() {
    int n_decides = 0;
    for (int i = 0; i < SIDES / 2 * N; i++) {
        map<int, vector<int> > possible_indices;
        for (int j = s[i], k = 0; k < N; j += inc[i], k++) {
            for (int l = 0; l < N; l++) 
                if ((1 << l) & possible[j]) {
                    possible_indices[l].push_back(j);
                }
        }

        for (auto const &iter : possible_indices) {
            int val = iter.first;
            if (iter.second.size() == 1) {
                int idx = iter.second[0];
                if (possible[idx] != (1 << val)) {
                    n_decides++;
                    set_value(idx, val);
                }
            }
        }
    }
    return n_decides;
}

int filter2 () {
    int cnt = 0;
    for (int i = 0; i < SIDES * N; i++) {
        if (my_clues[i] == 2) {
            int mask = MASK;
            for (int l = N - 1; l >= 0; l--) {
                int m = (1 << l) & possible[s[i]];
                mask ^= 1 << l;
                if (m) break;
            }

            for (int j = s[i] + inc[i], k = 1; k < N; j += inc[i], k++) {
                int m = (1 << (N - 1)) & possible[j];
                if (m) break;
                if ((possible[j] | mask) != mask) {
                    possible[j] &= mask;
                    cnt++;
                }
            }
        }
    }
    return cnt;
}

int count_possible(int val) {
    int n = 0;
    while (val) {
        n += val & 1;
        val >>= 1;
    }
    return n;
}

bool valid() {
    for (int i = 0; i < SIDES * N; i++) {
        if (my_clues[i] == 0) continue;

        bool is_decided = true;
        for (int j = s[i], k = 0; k < N; j += inc[i], k++) {
            if (count_possible(possible[j]) != 1) {
                is_decided = false;
                break;
            }
        }

        if (is_decided) {
            int largest = 0, n_clue = 0;
            for (int j = s[i], k = 0; k < N; j += inc[i], k++) {
                if (largest < possible[j]) {
                    n_clue++;
                    largest = possible[j];
                }
            }
            if (n_clue != my_clues[i]) return false;
        }
    }

    return true;
}

void write_results() {
    for (int i = 0; i < N * N; i++) {
        int x = i / N, y = i % N;
        for (int j = 0; j < N; j++) {
            if ((1 << j) == possible[i]) {
                results[x][y] = j + 1;
                break;
            }
        }
    }
}

bool dfs(int idx) {
    int i = -1, tmp = 10000;
    for (int _i = 0; _i < N * N; _i++) {
        int c = count_possible(possible[_i]);
        if (tmp > c && !vis[_i]) {
            tmp = c;
            i = _i;
        }
    }

    if (i == -1) {
        if (valid()) {
            write_results();
            return true;
        }
        return false;
    }

    int possible_bak[N * N];
    memcpy(possible_bak, possible, sizeof(int) * N * N);

    for (int j = N - 1; j >= 0; j--) {

        int m = (1 << j) & possible[i];
        if (m == 0) continue;

        vis[i] = true;
        set_value(i, j);
        bool found = false;
        if (valid()) {
            found = dfs(idx + 1);
        }
        vis[i] = false;
        memcpy(possible, possible_bak, sizeof(int) * N * N);
        if (found) {
            return true;
        }
    }
    return false;
}

void init() {
    for (int i = 0; i < N * N; i++) {
        possible[i] = MASK;
        vis[i] = true;
    }
}

void pre_process() {
    for (int i = 0; i < SIDES * N; i++) 
    {
        if (my_clues[i] == 0) continue;
        for (int j = s[i], k = 0; k < N; j += inc[i], k++) {
            int m = MASK;
            for (int l = N + k - my_clues[i] + 1; l < N; l++) m ^= 1 << l;
            possible[j] &= m;
        }
    }

    while (check_unique() > 0 );
    filter2();
}

vector<vector<int>> SolvePuzzle(const vector<int> &clues) {
    vector<vector<int>> r;
    init();
    my_clues = clues;

    pre_process();

    vector<pair<int, int>> idx_npos;
    for (int i = 0; i < N * N; i++) {
        int n_possible = count_possible(possible[i]);
        if (n_possible > 1) {
            vis[i] = false;
        }
    }

    dfs(0);

    for (int i = 0; i < N; i++) {
        vector<int> vec;
        for (int j = 0; j < N; j++) vec.push_back(results[i][j]);
        r.push_back(vec);
    }
    return r;
}

REDUX

features/api/apiSlice.js //// filename

// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/posts'
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = apiSlice

RTK Query's functionality is based on a single method, called createApi. All of the Redux Toolkit APIs we've seen so far are UI-agnostic, and could be used with any UI layer. The RTK Query core logic is the same way. However, RTK Query also includes a React-specific version of createApi, and since we're using RTK and React together, we need to use that to take advantage of RTK's React integration. So, we import from '@reduxjs/toolkit/query/react' specifically.
tip

Your application is expected to have only one createApi call in it. This one API slice should contain all endpoint definitions that talk to the same base URL. For example, endpoints /api/posts and /api/users are both fetching data from the same server, so they would go in the same API slice. If your app does fetch data from multiple servers, you can either specify full URLs in each endpoint, or if necessary create separate API slices for each server.

Endpoints are normally defined directly inside the createApi call. If you're looking to split up your endpoints between multiple files, see the "Injecting Endpoints" section in Part 8 section of the docs!

RTK Query Overview​ RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

useSelector()

type RootState = ReturnType<typeof store.getState>
type SelectorFn = <Selected>(state: RootState) => Selected
type EqualityFn = (a: any, b: any) => boolean
export type CheckFrequency = 'never' | 'once' | 'always'

interface UseSelectorOptions {
  equalityFn?: EqualityFn
  stabilityCheck?: CheckFrequency
  noopCheck?: CheckFrequency
}

const result: Selected = useSelector(
  selector: SelectorFunction,
  options?: EqualityFn | UseSelectorOptions
)

Allows you to extract data from the Redux store state for use in this component, using a selector function.
info

The selector function should be pure since it is potentially executed multiple times and at arbitrary points in time.

See Using Redux: Deriving Data with Selectors in the Redux docs for more details on writing and using selector functions.

The selector will be called with the entire Redux store state as its only argument. The selector may return any value as a result, including directly returning a value that was nested inside state, or deriving new values. The return value of the selector will be used as the return value of the useSelector() hook.

The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render. useSelector() uses strict === reference equality checks by default, not shallow equality (see the following section for more details).

The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux store. Because of the React update batching behavior used in React Redux v7, a dispatched action that causes multiple useSelector()s in the same component to return new values should only result in a single re-render.
info

There are potential edge cases with using props in selectors that may cause issues. See the Usage Warnings section of this page for further details.

// network important in redux 


REACT

React-router-dom stuff

Create React App doesn't include page routing.

<Link> is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use <Link> instead of <a href="">.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

Layout.js:

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

Home.js:

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;

Blogs.js:

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;

Contact.js:

const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;

NoPage.js:

const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;

AIRCRAFT DESIGN

An object that orbits another, especially a spacecraft that orbits a planet etc. without landing on it.

A single-stage-to-orbit (SSTO) vehicle reaches orbit from the surface of a body using only propellants and fluids and without expending tanks, engines, or other major hardware. The term usually, but not exclusively, refers to reusable vehicles.[1] To date, no Earth-launched SSTO launch vehicles have ever been flown; orbital launches from Earth have been performed by either fully or partially expendable multi-stage rockets.

The main projected advantage of the SSTO concept is elimination of the hardware replacement inherent in expendable launch systems. However, the non-recurring costs associated with design, development, research and engineering (DDR&E) of reusable SSTO systems are much higher than expendable systems due to the substantial technical challenges of SSTO, assuming that those technical issues can in fact be solved.[2] SSTO vehicles may also require a significantly higher degree of regular maintenance.[3]

It is considered to be marginally possible to launch a single-stage-to-orbit chemically fueled spacecraft from Earth. The principal complicating factors for SSTO from Earth are: high orbital velocity of over 7,400 metres per second (27,000 km/h; 17,000 mph); the need to overcome Earth's gravity, especially in the early stages of flight; and flight within Earth's atmosphere, which limits speed in the early stages of flight due to drag, and influences engine performance.[4]

Advances in rocketry in the 21st century have resulted in a substantial fall in the cost to launch a kilogram of payload to either low Earth orbit or the International Space Station,[5] reducing the main projected advantage of the SSTO concept.

Notable single stage to orbit concepts include Skylon, which used the hybrid-cycle SABRE engine that can use oxygen from the atmosphere when it is at low altitude, and then using onboard liquid oxygen after switching to the closed cycle rocket engine at high altitude, the McDonnell Douglas DC-X, the Lockheed Martin X-33 and VentureStar which was intended to replace the Space Shuttle, and the Roton SSTO, which is a helicopter that can get to orbit. However, despite showing some promise, none of them have come close to achieving orbit yet due to problems with finding a sufficiently efficient propulsion system and discontinued development.[1]

Single-stage-to-orbit is much easier to achieve on extraterrestrial bodies that have weaker gravitational fields and lower atmospheric pressure than Earth, such as the Moon and Mars, and has been achieved from the Moon by the Apollo program's Lunar Module, by several robotic spacecraft of the Soviet Luna program, and by China's Chang'e 5. 

// go back and look into single-stage-to-orbit on wikipedia

A nautical mile is slightly longer than a mile on land, equaling 1.1508 land-measured (or statute) miles. The nautical mile is based on the Earth's longitude and latitude coordinates, with one nautical mile equaling one minute of latitude. But why use a different measurement system for marine navigation?

What is the difference between a nautical mile and a knot?
The nautical mile measures distance and the knot measures speed.
Homeported in Pascagoula, Mississippi, NOAA Ship Pisces is the third in a class of state-of-the-art, acoustically quiet fisheries survey vessels built for a wide range of living marine resource surveys and ecosystem research projects. The ship focuses primarily on U.S. waters from the Gulf of Mexico, Caribbean, and South Atlantic to North Carolina.

The U.S. adopted the international nautical mile in 1954. Shown here: NOAA Ship Pisces is the third in a class of state-of-the-art, acoustically quiet fisheries survey vessels built for a wide range of living marine resource surveys and ecosystem research projects.
Nautical Miles

Nautical miles are used to measure the distance traveled through the water. A nautical mile is slightly longer than a mile on land, equaling 1.1508 land-measured (or statute) miles. The nautical mile is based on the Earth’s longitude and latitude coordinates, with one nautical mile equaling one minute of latitude.

But why use a different measurement system for marine navigation? Using latitude and longitude coordinates is more practical for long-distance travel, where the curvature of the Earth becomes a factor in accurate measurement. Nautical charts use latitude and longitude, so it’s far easier for mariners to measure distance with nautical miles. Air and space travel also use latitude and longitude for navigation and nautical miles to measure distance.

The word “mile” might leave you wondering if there’s a “nautical kilometer,” too. There’s not. The international nautical mile is used throughout the world. The measurement was officially set at exactly 1.852 kilometers in 1929 by what is now known as the International Hydrographic Organization. The U.S. and the United Kingdom both used slightly different measurements after that time, but the U.S. adopted the international nautical mile in 1954 and the U.K. in 1970.
Knots
animation showing the measurement of a know in historical terms

Measuring the knot in the 17th century.

Knots, on the other hand, are used to measure speed. One knot equals one nautical mile per hour, or roughly 1.15 statute mph.

The term knot dates from the 17th century, when sailors measured the speed of their ship using a device called a “common log.” The common log was a rope with knots at regular intervals, attached to a piece of wood shaped like a slice of pie. Mariners would lower the wood piece into the water and allow it to float freely behind the ship for a specific amount of time (often measured with an hourglass). When the time was up, they would count the knots between the ship and the piece of wood, and that number estimated their speed.

Boosters and orbiters have different requirements.



An owner-managed business (OMB) is a business that is managed by the people who own it.

Some of the most advanced technology was 12,000 pounds per square inch
internal pressure engines stage combustion //// look more into this



*/