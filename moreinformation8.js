/* 

PYTHON AND CODEWARS

// to get the perfect cube of numbers:

perfectCube = {z*z*z: z for z in range(2,20)}

def createAGraph(theVertices):
    theGraph = {}
    for theOrigin in range(1, theVertices+1):
        for theGoal in range(1, theVertices+1):
            if theOrigin != theGoal:
                if perfectCube.get(theOrigin+theGoal):
                    if theGraph.get(theOrigin) is None:
                        theGraph[theOrigin] = [theGoal]
                    else:
                        theGraph[theOrigin].append(theGoal)
    return theGraph



def theHamiltonPath(graph, start_point, vertices, path=[]):
    if start_point not in path:
        path.append(start_point)
    if len(path) == vertices:
        return path
    for next_pt in graph.get(start_point, []):
        res_path = [i for i in path]
        candidate = theHamiltonPath(graph, next_pt, vertices, res_path)
        if candidate is not None:
            return candidate


def cube_sums(num):
    graph = createAGraph(num)
    for i in range(1, num + 1):
        graph1 = theHamiltonPath(graph, i, num, [])
        if graph1 is not None:
            return graph1
    return False


print(perfectCube)
print(cube_sums(5))
print(cube_sums(15))
print(cube_sums(23))
print(cube_sums(37))

perfectSquares = {x*x: x for x in range(2, 50)}

def createGraph(vertices):
    graph = {}
    for origin in range(1, vertices+1):
            for goal in range(1, vertices+1):
                if origin != goal:
                    if perfectSquares.get(origin+goal):
                        if graph.get(origin) is None:
                            graph[origin] = [goal]
                        else:
                            graph[origin].append(goal)
    return graph

def hamiltonPath(graph, start_point, vertices, path = []):
    if start_point not in path:
            path.append(start_point)
            if len(path) == vertices:
                return path
            for next_pt in graph.get(start_point, []):
                res_path = [i for i in path]
                candidate = hamiltonPath(graph, next_pt, vertices, res_path)
                if candidate is not None:
                    return candidate

    

def square_sums(num):
    graph = createGraph(num)
    for i in range(1, num+1):
        graph1 = hamiltonPath(graph, i, num, [])
        if graph1 is not None:
            return graph1
    return False
    
print(perfectSquares)
print(square_sums(5))
print(square_sums(15))
print(square_sums(23))
print(square_sums(37))

*/