# scale-sidebar-nav



<!-- Auto Generated Below -->


## Usage

### Sidebar-nav

## Default

<style>
    .sidebar-nav {
    max-width: 25rem;
    }

    .sidebar-nav a {
    display: block;
    color: black;
    text-decoration: none;
    }
    .link-1 {
    padding: 1.6em 1em 1.6em 2em;
    }
    .link-3 {
    padding-left: 1em;
    }
    .condensed-item:not(:last-child) {
    padding-bottom: 1.6em;
    }
    .bold {
    font-weight: bold;
    }
</style>
<div class="sidebar-nav">
<scale-sidebar-nav>
    <scale-sidebar-nav-item>
        <a href="/overview" class="bold link-1">Overview</a>
    </scale-sidebar-nav-item>
    <scale-sidebar-nav-collapsible label="Reference" bold>
        <scale-sidebar-nav-collapsible label="Function A" condensed>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 1</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 2</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 3</a>
        </scale-sidebar-nav-item>
        </scale-sidebar-nav-collapsible>
        <scale-sidebar-nav-collapsible label="Function B" condensed>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 1</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 2</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 3</a>
        </scale-sidebar-nav-item>
        </scale-sidebar-nav-collapsible>
        <scale-sidebar-nav-collapsible label="Function C" condensed>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 1</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 2</a>
        </scale-sidebar-nav-item>
        <scale-sidebar-nav-item condensed>
            <a href="#" class="link-3">Endpoint 3</a>
        </scale-sidebar-nav-item>
        </scale-sidebar-nav-collapsible>
    </scale-sidebar-nav-collapsible>
    <scale-sidebar-nav-item>
        <a href="/console" class="bold link-1">Console</a>
    </scale-sidebar-nav-item>
</scale-sidebar-nav>
</div>



## Properties

| Property    | Attribute    | Description                                                                                                                                                                 | Type     | Default     |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `ariaLabel` | `aria-label` | From mdn: A brief description of the purpose of the navigation, omitting the term "navigation", as the screen reader will read both the role and the contents of the label. | `string` | `undefined` |
| `styles`    | `styles`     | (optional) Injected jss styles                                                                                                                                              | `any`    | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
