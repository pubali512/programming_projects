# Programming Projects

A collection of my personal programming projects spanning neural networks, full-stack web applications, and C++ applications.

## Repository Structure

```
programming_projects/
├── nn_projects/              # Neural network projects (image recognition, prediction)
│   ├── handwriting_reco/
│   ├── object_detect/
│   └── vehicle_speed_prediction/
├── fullstack_projects/       # Full-stack web applications (Python/Java backends + React frontends)
│   ├── finance/
│   └── timesheet/
└── cpp_projects/             # C++ applications (chatbots, optimization)
    ├── chatbot_projects/
    │   ├── RuleBasedChatbot/
    │   ├── RetrievalBasedChatbot/
    │   ├── HybridChatbot/
    │   └── WebHybridChatbot/
    └── ilp_projects/
        └── resource_alloc/
```

## Projects

### Neural Network Projects (`nn_projects/`)

| Project | Description |
|---------|-------------|
| **Handwriting Recognition** | A Jupyter notebook implementing handwritten digit classification on the MNIST dataset using a parameterizable CNN built with PyTorch. Includes hyperparameter benchmarking with 2D and 3D visualizations of accuracy across different network configurations. |
| **Object Detection** | A person detection system using Faster R-CNN (ResNet-50 FPN) fine-tuned on the COCO 2017 dataset. Supports configurable training parameters, evaluates with mean IoU, and produces 3D scatter plots of training metrics. |
| **Vehicle Speed Prediction** | An LSTM-based vehicle speed prediction pipeline that generates synthetic sensor data with a physics simulation, trains a recurrent neural network on sliding-window sequences, and evaluates predictions with MSE/RMSE metrics and time-series visualizations. |

### Full-Stack Projects (`fullstack_projects/`)

| Project | Description |
|---------|-------------|
| **Finance Manager** | A personal finance management app with a Flask/SQLAlchemy backend and React/Tailwind frontend. Users can track transactions with full CRUD, view dashboard statistics, analyze spending by category, export to CSV, and switch between multiple display currencies. |
| **Timesheet Tracker** | A timesheet tracking app with a Spring Boot 4/JPA backend and React frontend. Users can manage projects and tasks, log daily work hours via a weekly calendar view, and view aggregated time summaries with percentage breakdowns and visual spark bars. |

### C++ Projects (`cpp_projects/`)

#### Chatbot Projects (`chatbot_projects/`)

| Project | Description |
|---------|-------------|
| **Rule-Based Chatbot** | A simple CLI chatbot using keyword-based pattern matching. It loads keyword-response pairs from a configuration file and returns the first matching response, demonstrating basic text matching without ML techniques. |
| **Retrieval-Based Chatbot** | A CLI chatbot that uses TF-IDF and cosine similarity to find the most relevant answer from a Q&A dataset of ML/AI topics. Supports intent prefixes (`define:`, `explain:`, `ml term:`) for query refinement. |
| **Hybrid Chatbot** | A CLI chatbot combining rule-based and retrieval-based approaches. It first checks for exact keyword matches in a rules file, then falls back to TF-IDF retrieval against a Q&A dataset with a similarity threshold. |
| **Web Hybrid Chatbot** | A full-stack web version of the Hybrid Chatbot with a C++ backend (Crow HTTP framework) and React/Tailwind frontend. Features an animated dark-themed chat UI, REST API endpoints, and hot-reload of rules and dataset without server restart. |

#### ILP Projects (`ilp_projects/`)

| Project | Description |
|---------|-------------|
| **Resource Allocation** | A C++17 resource allocation optimizer that minimizes total project duration within an additional budget. Solves the problem using both a greedy heuristic (cost-benefit ratio sorting) and an exact ILP formulation (via the external `lp_solve` solver), allowing comparison of approximate vs. optimal solutions. Generalizable to hardware design optimization. |
